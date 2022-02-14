import { useEffect, useRef, useState } from "react";
import { w3cwebsocket as W3CWebsocket } from "websocket";
import useChannelHash from "./useChannelHash";

function useWebSocket() {
  const ws = useRef<null | W3CWebsocket>(null);
  const [socketConnected, setSocketConnected] = useState(false);

  const { channelHash } = useChannelHash();

  const newSocket = new W3CWebsocket(
    `${process.env.NEXT_PUBLIC_SOCKETURL_API_URL}/blockActivity/${channelHash}`
  );

  useEffect(() => {
    if (!ws.current) {
      ws.current = newSocket;
      ws.current.onopen = () => {
        console.log("websocket connected");
        setSocketConnected(true);
      };
    }

    return () => {
      console.log("clean up");
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;
    if (socketConnected) {
      ws.current.onmessage = (e) => {
        const socketData = JSON.parse(e.data.toString());
        console.log("websocket received: ", socketData);
      };
    }
  }, [socketConnected]);
}

export default useWebSocket;
