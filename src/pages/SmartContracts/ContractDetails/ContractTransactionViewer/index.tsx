import Loading from "@/components/Loading";
import TransactionTable from "@/components/TransactionTable";
import React from "react";
import useTxnActivity from "src/hooks/useTxnActivity";

function ContractTransactionViewer({ contractName }: { contractName: string }) {
  const { txnActivityData, loadingTxnActivityData } = useTxnActivity({
    chaincode: contractName,
  });

  if (loadingTxnActivityData) {
    return <Loading />;
  }
  return <TransactionTable txnData={txnActivityData} />;
}

export default ContractTransactionViewer;
