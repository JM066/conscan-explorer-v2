// import React from "react";
import { useQuery } from "react-query";
import instance from "../axios/instance";

import { useChannelHash } from "../helpers/useChannelHash";

const useBlockActivityData = () => {
  const { channelHash } = useChannelHash();
  const { data, isLoading } = useQuery("available-channels", async () => {
    const response = await instance.get(`/blockActivity/${channelHash}`);
    return response.data;
  });
  {
    return { data, isLoading };
  }
};

export default useBlockActivityData;
