import instance from "../axios/instance";

const getAvailableChannels = async () => {
  try {
    const channelsRes = await instance.get("/channels/info");
    return channelsRes?.data?.channels;
  } catch (error) {
    console.log(error);
  }
};

export default getAvailableChannels;
