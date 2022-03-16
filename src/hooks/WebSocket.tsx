import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { w3cwebsocket as W3CWebsocket } from "websocket";

import { BlockActivityDataType, TxnActivityDataType } from "../types/index";

export function useWebSocket(channelHash: string) {
  const queryClient = useQueryClient();

  let ws = useRef<null | W3CWebsocket>(null);
  const [socket, setSocket] = useState(false);

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
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      const socketData = JSON.parse(e.data.toString());
      const { txdata, ...socketBlocks } = socketData;
      const socketTxns = txdata;
      addWSBlock(socketBlocks);
      addWSTxns(socketTxns);
    };
  }, [socket]);

  const addWSBlock = (socketBlocks: BlockActivityDataType) => {
    queryClient.setQueryData(["latest-blocks", socketBlocks], socketBlocks);
  };
  const addWSTxns = (socketTxns: Array<TxnActivityDataType>) => {
    queryClient.setQueryData(["txActivity", socketTxns], socketTxns);
  };

  return null;
}
export default useWebSocket;
