// import React from "react";
// import { useQuery } from "react-query";
// import instance from "../axios/instance";
// import instance from "src/axios/instance";
// import getAvailableChannels from "../helpers/getAvailableChannels";

// const channelHash = getAvailableChannels();

// const getBlocksActivity = async (channelHash: string) => {
//   const { data } = await instance.get(`/blockActivity/${channelHash}`);
//   return data;
// };
const useBlockActivityData = () => {
  //   const { data, isLoading: isChannelInfoLoading } = useQuery("channels", () =>
  //     getBlocksActivity(channelHash: any)
  //   );
  //   return {
  //     response: data,
  //     isChannelInfoLoading,
  //   };
};

export default useBlockActivityData;
