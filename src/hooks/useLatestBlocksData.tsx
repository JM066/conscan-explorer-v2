import { useQuery } from "react-query";
import instance from "../axios/instance";

const useLatestBlocksData = (channelHash: string) => {
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
