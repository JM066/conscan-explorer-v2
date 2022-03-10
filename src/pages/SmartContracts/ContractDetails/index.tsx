import React, { useState } from "react";

import ContractDescription from "./ContractDescription";
import ContractTransactions from "./ContractTransactions";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import Table from "@/components/Table";
import Title from "@/components/Title";
// import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import DuplicatedSkeleton from "@/components/DuplicatedSkeleton";
import { toCapitalize, generateEmptyRows } from "@/helpers/index";
import { ContractsType, TxnActivityDataType } from "@/types/index";
import styles from "./ContractDetails.module.scss";
import useFilteredTransactionList from "@/hooks/useFilteredTransactionList";

interface Props {
  contracts: ContractsType;
  contractName: string;
}
function ContractDetails({ contracts, contractName }: Props) {
  const TABSARR = [
    { tabId: "txns", label: "TRANSACTIONS" },
    { tabId: "code", label: "CODE" },
  ];
  const { listOfTransactions, loadingTransactionsList } =
    useFilteredTransactionList(contractName);

  const [activeTab, setActiveTab] = useState<string>(TABSARR[0].tabId);
  // const [currentPage, setCurrentPage] = useState<number>(0);

  const contract = contracts.contracts.find(
    (contract) => contract.chaincodename === contractName
  );

  // const handleLatest = () => {
  //   setCurrentPage(0);
  // };

  // const handlePrev = () => {
  //   if (currentPage >= 9) {
  //     setCurrentPage((prev) => Math.max(prev - 5, 0));
  //   }
  // };
  // const handleNext = () => {
  //   if (currentPage < listOfTransactions.length - 1) {
  //     setCurrentPage((prev) =>
  //       Math.min(prev + 5, listOfTransactions.length - 1)
  //     );
  //   }
  // };

  // const handleOldest = () => {
  //   setCurrentPage(listOfTransactions.length - 1 - 5);
  // };
  console.log(listOfTransactions[0].id);

  return (
    <VStack className={styles.DrivePage}>
      <div className={styles.DrivePageContainer}>
        <Box position="start" bottomLine={false} className={styles.TitleHeader}>
          <Title title={toCapitalize(contractName)} />
        </Box>

        {contract && <ContractDescription contract={contract} />}
        <Box className={styles.TableHeader} position="start">
          <Tabs
            tabs={TABSARR}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <div className={styles.Division}></div>
          {/* <Pagination
            className={styles.PaginationButtons}
            handleLatest={handleLatest}
            handleOldest={handleOldest}
            handlePrev={handlePrev}
            handleNext={handleNext}
          /> */}
        </Box>
        {loadingTransactionsList ? (
          <Table>
            {generateEmptyRows(5).map((index: number) => (
              <DuplicatedSkeleton key={index} />
            ))}
          </Table>
        ) : activeTab === "txns" ? (
          listOfTransactions?.map((transaction: TxnActivityDataType) => {
            return (
              <ContractTransactions key={transaction.id} txns={transaction} />
            );
          })
        ) : (
          <div>code</div>
        )}
      </div>
    </VStack>
  );
}
export default ContractDetails;
