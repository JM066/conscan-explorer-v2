import { useQuery } from "react-query";
import instance from "../axios/instance";

import useChannelHash from "./useChannelHash";

const useLatestBlocksData = () => {
  const { channelHash } = useChannelHash();
  const { data: latestBlocks, isLoading } = useQuery(
    "latest-blocks",
    async () => {
      const response = await instance.get(`/blockActivity/${channelHash}`);
      return response.data?.row;
    }
  );
  {
    return { latestBlocks, isLoading };
  }
};

export default useLatestBlocksData;
