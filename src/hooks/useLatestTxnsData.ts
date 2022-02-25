import { useQuery } from "react-query";

import instance from "../axios/instance";

// import useChannelHash from "./useChannelHash";

function useLatestTxnsData(channelHash: string) {
  // const { channelHash } = useChannelHash();

  const { data: latestTxns, isLoading } = useQuery("txActivity", async () => {
    const response = await instance.get(`txActivity/${channelHash}`);
    return response.data.row;
  });

  return { latestTxns, isLoading };
}

export default useLatestTxnsData;
