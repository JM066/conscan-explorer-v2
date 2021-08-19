import React from "react";
import { useRouter } from "next/router";

import Panel from "@/components/Panel";
import Loading from "@/components/Loading";

import useSmartContractList from "src/hooks/useSmartContractList";

import { SmartContractDetailsType } from "src/types";
import InfoTable from "./InfoTable";
import ContractDescription from "./ContractDescription";
import ContractTransactionViewer from "./ContractTransactionViewer";

function ContractDetails() {
  const router = useRouter();

  const { contractName } = router.query;

  const { listOfContracts, loadingContractList } = useSmartContractList();

  const thisSmartContract = listOfContracts?.find(
    (con: SmartContractDetailsType) => con.name === contractName
  );

  if (loadingContractList) {
    return <Loading />;
  }

  if (!thisSmartContract) {
    router.push("/404");
  }

  return (
    <Panel>
      <InfoTable smartContract={thisSmartContract} />
      <ContractDescription />
      <ContractTransactionViewer contractName={thisSmartContract.name} />
    </Panel>
  );
}

export default ContractDetails;
