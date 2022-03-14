import React, { useState } from "react";

import ContractDescription from "./ContractDescription";
import ContractTransactions from "./ContractTransactions";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import DuplicatedSkeleton from "@/components/DuplicatedSkeleton";
import { toCapitalize } from "@/helpers/index";
import { ContractsType, TxnActivityDataType } from "@/types/index";
import styles from "./ContractDetails.module.scss";
import useFilteredTransactionList from "@/hooks/useFilteredTransactionList";

interface Props {
  contracts: ContractsType;
  contractName: string;
  txnsList: Array<TxnActivityDataType>;
}

function ContractDetails({ contracts, contractName, txnsList }: Props) {
  const TABSARR = [
    { tabId: "txns", label: "TRANSACTIONS" },
    { tabId: "code", label: "CODE" },
  ];

  const [activeTab, setActiveTab] = useState<string>(TABSARR[0].tabId);
  const [currentPage, setCurrentPage] = useState<number>(txnsList[0]?.id);

  const { listOfTransactions, loadingTransactionsList } =
    useFilteredTransactionList(contractName, currentPage);

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

  let txnsData;
  if (loadingTransactionsList) {
    txnsData = <DuplicatedSkeleton row={5} />;
  } else {
    txnsData = listOfTransactions?.map(
      (transaction: TxnActivityDataType, index: number) => {
        if (index < 5) {
          return (
            <ContractTransactions key={transaction.id} txns={transaction} />
          );
        }
      }
    );
  }

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
          <Tabs
            tabs={TABSARR}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <Pagination
            handleLatest={handleLatest}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </Box>
        {activeTab === "txns" ? txnsData : <div>code code code </div>}
      </div>
    </VStack>
  );
}
export default ContractDetails;
