import { useQuery } from "react-query";
import instance from "../axios/instance";

export function useChannelHash() {
  const { data: channelHash, isLoading: loadingChannelHash } = useQuery(
    "channel-hash",
    async () => {
      const response = await instance.get("/channels/info");
      return response.data.channels[0].channel_genesis_hash;
    }
  );
  return {
    channelHash,
    loadingChannelHash,
  };
}
