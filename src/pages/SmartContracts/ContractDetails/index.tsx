import React from "react";

import ContractDescription from "./ContractDescription";
import ContractTransactions from "./ContractTransactions";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import Title from "@/components/Title";
import { toCapitalize } from "@/helpers/index";
import { ContractsType, TxnActivityDataType } from "@/types/index";
import styles from "./ContractDetails.module.scss";
import useFilteredTransactionList from "@/hooks/useFilteredTransactionList";

interface Props {
  contracts: ContractsType;
  contractName: string;
}
function ContractDetails({ contracts, contractName }: Props) {
  const contract = contracts.contracts.find(
    (contract) => contract.chaincodename === contractName
  );
  console.log("constact", contract?.chaincodename);
  const { listOfTransactions, loadingTransactionsList } =
    useFilteredTransactionList(contractName);
  if (loadingTransactionsList) return <div>Loading...</div>;
  return (
    <VStack className={styles.DrivePage}>
      <div className={styles.DrivePageContainer}>
        <Box position="start" bottomLine={false}>
          <Title title={toCapitalize(contractName)} />
        </Box>
        {contract && <ContractDescription contract={contract} />}
        {listOfTransactions &&
          listOfTransactions.map((transaction: TxnActivityDataType) => {
            return (
              <ContractTransactions key={transaction.id} txns={transaction} />
            );
          })}
      </div>
    </VStack>
  );
}
export default ContractDetails;
