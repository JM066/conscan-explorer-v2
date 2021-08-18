import { useQuery } from "react-query";
import instance from "../axios/instance";

export function useAvailableChannels() {
  const { data } = useQuery("available-channels", async () => {
    const response = await instance.get("/channels/info");
    return response.data.channels;
  });
  return data;
}
