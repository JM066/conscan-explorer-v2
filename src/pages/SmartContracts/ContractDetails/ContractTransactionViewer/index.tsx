import Loading from "@/components/Loading";
import TransactionTable from "@/components/TransactionTable";
import React from "react";
import { useQuery } from "react-query";
import instance from "src/axios/instance";
import { useChannelHash } from "src/hooks/useChannelHash";

function ContractTransactionViewer({ contractName }: { contractName: string }) {
  const { channelHash, loadingChannelHash } = useChannelHash();

  const { data, isLoading } = useQuery(
    ["smart-contract-txns-", contractName],
    async () => {
      const response = await instance.get(
        `/txActivity/${channelHash}?chaincode=${contractName}`
      );

      return response.data?.row.map((row: any) => {
        return { ...row, createdt: new Date(row.createdt) };
      });
    },
    { enabled: !loadingChannelHash && !!contractName }
  );

  if (isLoading) {
    return <Loading />;
  }
  return <TransactionTable txnData={data} />;
}

export default ContractTransactionViewer;
