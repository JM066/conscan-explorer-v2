import React, { useState, useLayoutEffect, useRef } from "react";
import useStore from "@/store/store";
import ContractDescription from "./ContractDescription";
import ContractTxnsTab from "./ContractTxnsTab";
import CodeSnippetTab from "./CodeSnippetTab";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import Table from "@/components/Table";
import SkeletonTable from "@/components/SkeletonTable";

import useFilteredTransactionList from "@/hooks/useFilteredTransactionList";

import { toCapitalize } from "@/helpers/index";

import { contractData, TxnActivityDataType } from "@/types/index";
import styles from "./ContractDetails.module.scss";

interface Props {
  contracts: contractData;
  contractName: string;
  txnsList: Array<TxnActivityDataType>;
}

function ContractDetails({ contracts, contractName, txnsList }: Props) {
  const [activeTab, setActiveTab] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(txnsList[0]?.id);
  const [size, setSize] = useState<number | undefined>(0);
  const isMobile = useStore((state) => state.isMobile);
  const refWidth = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { current } = refWidth;
    function getTableWidth() {
      const tableWidth = current?.offsetWidth;
      setSize(tableWidth);
    }
    current?.addEventListener("resize", getTableWidth);
    getTableWidth();
    return () => {
      current?.removeEventListener("resize", getTableWidth);
    };
  }, []);
  const { listOfTransactions, loadingTransactionsList } =
    useFilteredTransactionList("contract", contractName, currentPage);

  const contractFound = contracts.chaincode.find(
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
  let loadTabData;
  if (activeTab === "txns") {
    loadTabData = (
      <Table>
        {listOfTransactions?.map(
          (transaction: TxnActivityDataType, index: number) => {
            if (index < 5) {
              return (
                <ContractTxnsTab key={transaction.id} txns={transaction} />
              );
            }
          }
        )}
        {isMobile && (
          <Pagination
            className={styles.MobilePagination}
            handleLatest={handleLatest}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        )}
      </Table>
    );
  }
  if (activeTab === "desc") {
    loadTabData = (
      <Table>
        {contractFound && <ContractDescription contract={contractFound} />}
      </Table>
    );
  }
  if (activeTab === "code") {
    loadTabData = (
      <Table scrollable>
        <CodeSnippetTab tableWidth={size} contractName={contractName} />
      </Table>
    );
  }
  return (
    <VStack className={styles.DrivePage}>
      <Box
        position="start"
        bottomLine={false}
        className={styles.TitleHeader}
        goBackButton={isMobile ? false : true}
        title={toCapitalize(contractName)}
      />

      <div className={styles.DrivePageContainer} ref={refWidth}>
        {contractFound && !isMobile && (
          <ContractDescription contract={contractFound} />
        )}
        <Box className={styles.TableHeader} position="start">
          <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
          {!isMobile && (
            <Pagination
              handleLatest={handleLatest}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          )}
        </Box>
        <VStack>
          {loadingTransactionsList ? (
            <SkeletonTable size="large" row={5} />
          ) : (
            loadTabData
          )}
        </VStack>
      </div>
    </VStack>
  );
}
export default ContractDetails;
