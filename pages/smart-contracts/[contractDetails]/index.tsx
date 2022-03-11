import { getAllcontracts, getTxnsListByContract } from "pages/api";

import ContractDetails from "../../../src/pages/SmartContracts/ContractDetails";

export async function getServerSideProps(context: any) {
  const contracts = await getAllcontracts();
  const { params } = context;
  const contractName = params.contractDetails;

  const { txnsList } = await getTxnsListByContract(contractName);
  return {
    props: { contracts, contractName, txnsList },
  };
}

export default ContractDetails;
