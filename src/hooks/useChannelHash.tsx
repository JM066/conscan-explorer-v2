import { useQuery } from "react-query";
import { getHash } from "../../pages/api/index";

function useChannelHash() {
  const { data: channelHash, isLoading: loadingChannelHash } = useQuery(
    "channel-hash",
    async () => {
      const response = await getHash();
      return response;
    }
  );
  return { channelHash, loadingChannelHash };
}

export default useChannelHash;
