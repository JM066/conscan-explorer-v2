import React from "react";
import { useRouter } from "next/router";

import Panel from "@/components/Panel";
import Loading from "@/components/Loading";
import TabPanel from "@/components/TabPanel";

import ContractTransactionViewer from "./ContractTransactionViewer";
import ContractDescription from "./ContractDescription";
import InfoTable from "./InfoTable";

import useSmartContractList from "src/hooks/useSmartContractList";

import { SmartContractDetailsType, StringKeyObject } from "src/types";

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

  const tabs: StringKeyObject = {
    Transactions: (
      <ContractTransactionViewer contractName={thisSmartContract.name} />
    ),
  };

  return (
    <Panel>
      <InfoTable smartContract={thisSmartContract} />
      <ContractDescription />
      <TabPanel tabs={tabs} />
    </Panel>
  );
}

export default ContractDetails;
