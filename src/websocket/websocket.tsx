import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import { w3cwebsocket as W3CWebsocket } from "websocket";

// import useLatestBlocksData from "@/hooks/useLatestBlocksData";
// import useTxnActivity from "@/hooks/useTxnActivity";
import useChannelHash from "../hooks/useChannelHash";
import { ObjectType } from "../types/index";

interface contextProps {
  socketBlocks: ObjectType | null;
  socketTxns: Array<ObjectType> | null;
}
const defaultState = {
  socketBlocks: { block: "blablaBlck", data: "blablaBlock data" },
  socketTxns: [{ txn: "blablatxn", id: "blablaidtxn" }],
};

const WebSocketContext = createContext<contextProps | undefined>(defaultState);

export function WebSocketContextProvider(props: any) {
  // const { latestBlocks, isLoading } = useLatestBlocksData();
  // const { txnActivityData, loadingTxnActivityData } = useTxnActivity();
  let ws = useRef<null | W3CWebsocket>(null);
  const [socket, setSocket] = useState(false);
  const [newBlocks, setNewBlocks] = useState<ObjectType | null>(null);
  const [newTxns, setNewTxns] = useState<Array<ObjectType> | null>(null);

  const { channelHash } = useChannelHash();

  const newSocket = new W3CWebsocket(
    `${process.env.NEXT_PUBLIC_SOCKETURL_API_URL}/blockActivity/${channelHash}`
  );

  useEffect(() => {
    if (!ws.current) {
      ws.current = newSocket;

      ws.current.onopen = () => {
        console.log("connected ");
        setSocket(true);
      };

      ws.current.onclose = (error) => {
        console.log(error);
      };
      ws.current.onerror = (error) => {
        console.log("connection error ");
        console.log(error);
      };
    }

    return () => {
      console.log("clean up");
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    if (ws.current) {
      ws.current.onmessage = (e) => {
        const socketData = JSON.parse(e.data.toString());
        const { txdata, ...socketBlocks } = socketData;
        const socketTxns = txdata;

        console.log("socketData", socketData);
        setNewBlocks(socketBlocks);
        setNewTxns(socketTxns);
      };
    }
  }, [socket]);

  const context = {
    socketBlocks: newBlocks,
    socketTxns: newTxns,
  };

  return (
    <WebSocketContext.Provider value={context}>
      {props.children}
    </WebSocketContext.Provider>
  );
}
export default WebSocketContext;
