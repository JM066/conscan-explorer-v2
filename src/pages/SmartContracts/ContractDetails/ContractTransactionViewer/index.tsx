import React from "react";

import Loading from "@/components/Loading";

import useLatestTxnsData from "src/hooks/useLatestTxnsData";

function ContractTransactionViewer() {
  const { latestTxns, isLoading } = useLatestTxnsData();

  if (isLoading) {
    return <Loading />;
  }
  return <div>Transaction Viewer{latestTxns}</div>;
}

export default ContractTransactionViewer;
