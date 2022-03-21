import { useQuery } from "react-query";
import instance from "../axios/instance";

function useWalletStatus(channelHash: string, walletAddress: string) {
  const { data: walletStatus, isLoading } = useQuery(
    ["wallet-stats", walletAddress],
    async () => {
      const response = await instance.get(
        `/status/userActivity/${channelHash}/${walletAddress}`
      );
      return response.data.row;
    }
  );
  return {
    walletStatus,
    isLoading,
  };
}
export default useWalletStatus;
