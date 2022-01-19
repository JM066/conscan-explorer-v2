import { useQuery } from "react-query";

import instance from "../axios/instance";

function useActiveBlocksData(channelHash: string, pageNum: number) {
  const {
    isLoading,
    data: activeBlocksData,
    isError,
    error,
  } = useQuery(["page-number", pageNum], async () => {
    const response = await instance.get(
      `/blockActivity/${channelHash}?blocknum=${pageNum}`
    );
    return await response.data;
  });
  return { activeBlocksData, isLoading, isError, error };
}
export default useActiveBlocksData;
