import { useQuery } from "react-query";

import instance from "../axios/instance";

function useActiveTxnsData(channelHash: string, pageNum: number) {
  const {
    isLoading,
    data: activeTxnsData,
    isError,
    error,
  } = useQuery(["page-number", pageNum], async () => {
    const response = await instance.get(
      `/txActivity/${channelHash}?txId=${pageNum}`
    );
    return await response.data;
  });
  return { activeTxnsData, isLoading, isError, error };
}
export default useActiveTxnsData;
