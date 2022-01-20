import { useQuery } from "react-query";

import instance from "src/axios/instance";

import useChannelHash from "./useChannelHash";

function useTxnActivity() {
  const { channelHash } = useChannelHash();

  const { data: txnActivityData, isLoading: loadingTxnActivityData } = useQuery(
    "txActivity",
    async () => {
      const response = await instance.get(`txActivity/${channelHash}`);
      return response.data.row;
    }
  );

  return { txnActivityData, loadingTxnActivityData };
}

export default useTxnActivity;
