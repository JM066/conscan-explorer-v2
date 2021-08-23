import { useQuery } from "react-query";

import instance from "src/axios/instance";

import { useChannelHash } from "./useChannelHash";

import { TxnActivityDataType } from "src/types";

type ParamProps = {
  limit?: string | number;
  chaincode?: string;
  txId?: string | number;
} | null;

function useTxnActivity(params: ParamProps = null) {
  const { channelHash, loadingChannelHash } = useChannelHash();

  let axiosURL = `/txActivity/${channelHash}`;

  if (params) {
    axiosURL += "?";
    const axiosExtras = [];

    if (params.chaincode) {
      axiosExtras.push(`chaincode=${params.chaincode}`);
    }
    if (params.limit) {
      axiosExtras.push(`limit=${params.chaincode}`);
    }
    if (params.txId) {
      axiosExtras.push(`txId=${params.chaincode}`);
    }

    if (axiosExtras.length === 1) {
      axiosURL += [axiosExtras];
    } else {
      axiosURL += axiosExtras.join("&");
    }
  }

  const { data: txnActivityData, isLoading: loadingTxnActivityData } = useQuery<
    TxnActivityDataType[]
  >(
    params?.chaincode ? [params.chaincode, "-txn-data"] : "txn-activity-data",
    async () => {
      const response = await instance.get(axiosURL);

      return response.data?.row.map((row: TxnActivityDataType) => {
        return {
          ...row,
          tx_hash_time: {
            txhash: row.txhash,
            createdt: new Date(row.createdt),
          },
          tx_from_to: {
            tx_from: row.tx_from,
            tx_to: row.tx_to,
          },
          tx_action_value: {
            tx_action: row.tx_action,
            tx_value: row.tx_value,
          },
        };
      });
    },
    { enabled: !loadingChannelHash }
  );
  return { txnActivityData, loadingTxnActivityData };
}

export default useTxnActivity;
