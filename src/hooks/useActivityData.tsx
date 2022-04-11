import { useQuery } from "react-query";

import instance from "../axios/instance";

function useActivityData(
  channelHash: string,
  pageNum: string,
  dataName: string
) {
  const {
    isLoading,
    data: activeData,
    isError,
    error,
  } = useQuery(["active-data", dataName, pageNum], async () => {
    const response = await instance.get(
      `/${dataName}/${channelHash}${
        dataName === "blockActivity" ? "?blocknum=" : "?txId="
      }${pageNum}`
    );
    return await response.data.row;
  });
  return { activeData, isLoading, isError, error };
}
export default useActivityData;
