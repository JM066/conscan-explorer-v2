import { useQuery } from "react-query";

import instance from "../axios/instance";

function useChannelStatistics(channelHash: string) {
  const { data } = useQuery(
    "channel-statistics",
    async () => {
      const response = await instance.get(`/status/${channelHash}`);
      return response?.data;
    },
    { enabled: !!channelHash }
  );

  return {
    blocks: data?.latestBlock,
    txns: data?.txCount,
  };
}

export default useChannelStatistics;
