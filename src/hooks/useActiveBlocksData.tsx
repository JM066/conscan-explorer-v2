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
      `http://192.168.100.208:8080/api/blockActivity/${channelHash}?blocknum=${pageNum}`
    );
    return await response.data;
  });
  return { activeBlocksData, isLoading, isError, error };
}
export default useActiveBlocksData;
