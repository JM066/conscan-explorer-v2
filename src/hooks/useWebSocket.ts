import { useEffect, useRef } from "react";
import { w3cwebsocket as W3CWebsocket } from "websocket";
import useChannelHash from "./useChannelHash";

function useWebSocket() {
  const ws = useRef<null | W3CWebsocket>(null);

  const { channelHash } = useChannelHash();

  const newSocket = new W3CWebsocket(
    `${process.env.NEXT_PUBLIC_SOCKETURL_API_URL}/blockActivity/${channelHash}`
  );

  useEffect(() => {
    if (!ws.current) return;
    ws.current = newSocket;

    return () => {
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      const socketData = JSON.parse(e.data.toString());

      console.log("websocket received: ", socketData);
    };
  }, []);
}

export default useWebSocket;
