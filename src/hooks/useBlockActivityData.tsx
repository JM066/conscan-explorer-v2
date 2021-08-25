import { useQuery } from "react-query";
import instance from "../axios/instance";

import { useChannelHash } from "./useChannelHash";

const useBlockActivityData = () => {
  const { channelHash } = useChannelHash();
  const { data, isLoading } = useQuery("blocks-activity", async () => {
    const response = await instance.get(`/blockActivity/${channelHash}`);
    return response.data?.row;
  });
  {
    return { data, isLoading };
  }
};

export default useBlockActivityData;
