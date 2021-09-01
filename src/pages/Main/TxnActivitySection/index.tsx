import React from "react";

import Title from "@/components/Title";
import Loading from "@/components/Loading";
import Button from "@/components/Button";

import useTxnActivity from "@/hooks/useTxnActivity";
import TransactionTable from "@/components/TransactionTable";
import TwinPanel from "@/components/TwinPanel";

function TxnActivitySection() {
  const { txnActivityData, loadingTxnActivityData } = useTxnActivity();

  return (
    <TwinPanel>
      <Title>Recent Transactions</Title>
      {loadingTxnActivityData ? (
        <Loading />
      ) : (
        <TransactionTable txnData={txnActivityData} />
      )}
      <Button>View More Transactions</Button>
    </TwinPanel>
  );
}

export default TxnActivitySection;
