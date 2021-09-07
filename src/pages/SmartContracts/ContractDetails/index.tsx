import React from "react";
import { useRouter } from "next/router";

import Panel from "@/components/Panel";
import Loading from "@/components/Loading";
import TabPanel from "@/components/TabPanel";
import Tab from "@/components/TabPanel/Tab";

import ContractTransactionViewer from "./ContractTransactionViewer";
import ContractDescription from "./ContractDescription";
import InfoTable from "./InfoTable";

import useSmartContractList from "src/hooks/useSmartContractList";

import { SmartContractDetailsType } from "src/types";

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
      <TabPanel>
        <Tab tabName={"Transactions"}>
          <ContractTransactionViewer contractName={thisSmartContract.name} />
        </Tab>
      </TabPanel>
    </Panel>
  );
}

export default ContractDetails;
