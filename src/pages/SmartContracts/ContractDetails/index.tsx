import React from "react";

import HStack from "@/components/HStack";
import Loading from "@/components/Loading";

import ContractDescription from "./ContractDescription";

import useSmartContractList from "src/hooks/useSmartContractList";

// import { SmartContractDetailsType } from "src/types";

function ContractDetails() {
  const { listOfContracts, loadingContractList } = useSmartContractList();

  console.log("listOfContracts", listOfContracts);
  if (loadingContractList) {
    return <Loading />;
  }

  // if (!thisSmartContract) {
  //   router.push("/404");
  // }

  return (
    <HStack>
      <ContractDescription />
    </HStack>
  );
}

export default ContractDetails;
