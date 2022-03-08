import { useQuery } from "react-query";
import instance from "src/axios/instance";
import useChannelHash from "./useChannelHash";

function useFilteredTransactionList(dataRole: string) {
  const { channelHash } = useChannelHash();

  const { data: listOfTransactions, isLoading: loadingTransactionsList } =
    useQuery(
      "contract-transactions",
      async () => {
        const response = await instance.get(
          `/${
            dataRole === "wallet" ? "userActivity" : "txActivity"
          }/${channelHash}?chaincode=${dataRole}`
        );
        return response.data?.row;
      },
      { enabled: !!channelHash }
    );
  return { listOfTransactions, loadingTransactionsList };
}

export default useFilteredTransactionList;
