import React from "react";
import { useRouter } from "next/router";

import Panel from "@/components/Panel";
import useSmartContractList from "src/hooks/useSmartContractList";

function ContractDetails() {
  const router = useRouter();

  const { contractName } = router.query;

  const { listOfContracts, loadingContractList } = useSmartContractList();

  console.log(listOfContracts);
  console.log(contractName);

  if (loadingContractList) {
    return <Panel>LOADING</Panel>;
  }

  if (!listOfContracts.some((con: any) => con.name === contractName)) {
    return <Panel>Placeholder for redirect, or 404 or whatever</Panel>;
  }

  return <Panel>{contractName}</Panel>;
}

export default ContractDetails;
