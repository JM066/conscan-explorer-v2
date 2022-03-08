import { getAllcontracts } from "pages/api";

import ContractDetails from "../../../src/pages/SmartContracts/ContractDetails";

export async function getServerSideProps(context: any) {
  const contracts = await getAllcontracts();
  const { params } = context;
  const contractName = params.contractDetails;
  return {
    props: { contracts, contractName },
  };
}

export default ContractDetails;
