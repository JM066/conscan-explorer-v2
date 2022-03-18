import React, { useState } from "react";

import ContractDescription from "./ContractDescription";
import ContractTransactions from "./ContractTransactions";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import Table from "@/components/Table";

import useFilteredTransactionList from "@/hooks/useFilteredTransactionList";

import { toCapitalize } from "@/helpers/index";

import { ContractsType, TxnActivityDataType } from "@/types/index";
import styles from "./ContractDetails.module.scss";

interface Props {
  contracts: ContractsType;
  contractName: string;
  txnsList: Array<TxnActivityDataType>;
}

function ContractDetails({ contracts, contractName, txnsList }: Props) {
  const [activeTab, setActiveTab] = useState<string>("txns");
  const [currentPage, setCurrentPage] = useState<number>(txnsList[0]?.id);

  const { listOfTransactions, loadingTransactionsList } =
    useFilteredTransactionList("contract", contractName, currentPage);

  const contract = contracts.contracts.find(
    (contract) => contract.chaincodename === contractName
  );

  const handleLatest = () => {
    setCurrentPage(txnsList[0]?.id);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev + 5);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev - 5);
  };

  return (
    <VStack className={styles.DrivePage}>
      <Box
        position="start"
        bottomLine={false}
        className={styles.TitleHeader}
        goBackButton
        title={toCapitalize(contractName)}
      />

      <div className={styles.DrivePageContainer}>
        {contract && <ContractDescription contract={contract} />}
        <Box className={styles.TableHeader} position="start">
          <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
          <Pagination
            handleLatest={handleLatest}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </Box>
        <Table size="medium" loading={loadingTransactionsList} skeletonRow={5}>
          {activeTab === "txns" ? (
            listOfTransactions?.map(
              (transaction: TxnActivityDataType, index: number) => {
                if (index < 5) {
                  return (
                    <ContractTransactions
                      key={transaction.id}
                      txns={transaction}
                    />
                  );
                }
              }
            )
          ) : (
            <div>No Code Data</div>
          )}
        </Table>
      </div>
    </VStack>
  );
}
export default ContractDetails;
