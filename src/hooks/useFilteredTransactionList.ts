import { useQuery } from "react-query";
import instance from "src/axios/instance";
import useChannelHash from "./useChannelHash";

function useFilteredTransactionList(
  dataRole: string,
  param: string,
  txnId: number
) {
  const { channelHash } = useChannelHash();

  const { data: listOfTransactions, isLoading: loadingTransactionsList } =
    useQuery(
      ["contract-transactions", dataRole, txnId],
      async () => {
        const response = await instance.get(
          dataRole === "wallet"
            ? `/userActivity/${channelHash}/${param}?txId=${txnId}`
            : `/txActivity/${channelHash}?chaincode=${param}&txId=${txnId}`
        );
        return response.data?.row;
      },
      { enabled: !!channelHash }
    );
  return { listOfTransactions, loadingTransactionsList };
}

export default useFilteredTransactionList;
