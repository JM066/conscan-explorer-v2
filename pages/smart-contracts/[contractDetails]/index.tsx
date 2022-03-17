import { getAllcontracts, getTxnsListTable } from "pages/api";

import ContractDetails from "../../../src/pages/SmartContracts/ContractDetails";

export async function getServerSideProps(context: any) {
  const contracts = await getAllcontracts();
  const { params } = context;
  const contractName = params.contractDetails;

  const { txnsList } = await getTxnsListTable("txActivity", contractName);
  return {
    props: { contracts, contractName, txnsList },
  };
}

export default ContractDetails;
