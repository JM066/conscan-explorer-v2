import { useQuery } from "react-query";
import instance from "../axios/instance";

const useLatestActivityData = (channelHash: string, dataName: string) => {
  const { data: latestData, isLoading } = useQuery(
    ["latest-data", dataName],
    async () => {
      const response = await instance.get(`/${dataName}/${channelHash}`);
      return response.data?.row;
    }
  );
  {
    return { latestData, isLoading };
  }
};

export default useLatestActivityData;
