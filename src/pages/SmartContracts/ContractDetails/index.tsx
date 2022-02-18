import React from "react";
import { useRouter } from "next/router";

import HStack from "@/components/HStack";
import Loading from "@/components/Loading";

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
    <HStack>
      <InfoTable smartContract={thisSmartContract} />
      <ContractDescription />
      <ContractTransactionViewer contractName={thisSmartContract.name} />
    </HStack>
  );
}

export default ContractDetails;
