import { useQuery } from "react-query";
import instance from "../axios/instance";

function useActivityDetailsData(
  channelHash: string,
  idNumber: number,
  path: string
) {
  const {
    isLoading,
    data: dataDetails,
    isError,
    error,
  } = useQuery(["data-details", idNumber, path], async () => {
    const response = await instance.get(`${path}/${channelHash}/${idNumber}`);

    return await response.data;
  });

  return { isLoading, dataDetails, isError, error };
}

export default useActivityDetailsData;
