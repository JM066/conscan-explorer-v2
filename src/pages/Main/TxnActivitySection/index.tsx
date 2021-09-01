import React from "react";

import Panel from "@/components/Panel";
import Title from "@/components/Title";
import Loading from "@/components/Loading";
import Button from "@/components/Button";

import useTxnActivity from "@/hooks/useTxnActivity";
import TransactionTable from "@/components/TransactionTable";

function TxnActivitySection() {
  const { txnActivityData, loadingTxnActivityData } = useTxnActivity();

  return (
    <Panel>
      <Title>Recent Transactions</Title>
      {loadingTxnActivityData ? (
        <Loading />
      ) : (
        <TransactionTable txnData={txnActivityData} />
      )}
      <Button>View More Transactions</Button>
    </Panel>
  );
}

export default TxnActivitySection;
