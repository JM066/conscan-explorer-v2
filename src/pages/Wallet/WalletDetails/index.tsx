import React, { useState } from "react";
import WalletDescription from "./WalletDescription";
import ContractTransactions from "../../SmartContracts/ContractDetails/ContractTransactions";
import VStack from "@/components/VStack";
import HStack from "@/components/HStack";
import Box from "@/components/Box";
import Table from "@/components/Table";
import Tabs from "@/components/Tabs";
import Pagination from "@/components/Pagination";
import DuplicatedSkeleton from "@/components/DuplicatedSkeleton";

import useWalletStatus from "@/hooks/useWalletStatus";
import useFilteredTransactionList from "@/hooks/useFilteredTransactionList";
import { FormatValue } from "@/helpers/index";
import { TxnActivityDataType } from "@/types/index";

import QRIcon from "@/assets/icons/qr_icon.svg";
import CopyIcon from "@/assets/icons/copy_icon.svg";
import styles from "./WalletDetails.module.scss";

interface Props {
  txnsList: Array<TxnActivityDataType>;
  channelHash: string;
  walletAddress: string;
}
function WalletDetails({ txnsList, channelHash, walletAddress }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(txnsList[0]?.id);
  const [activeTab, setActiveTab] = useState<string>("txns");
  const { walletStatus, isLoading } = useWalletStatus(
    channelHash,
    walletAddress
  );
  const { listOfTransactions, loadingTransactionsList } =
    useFilteredTransactionList("wallet", walletAddress, currentPage);

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
    <div className={styles.WalletPage}>
      <Box
        className={styles.TitleBox}
        bottomLine={false}
        goBackButton
        title="Wallet Details"
      />

      <VStack className={styles.TableContainer}>
        <div className={styles.WalletAddressContainer}>
          <HStack className={styles.WalletAddress}>
            <div className={styles.Title}>WALLET ADDRESS</div>
            <HStack className={styles.DescriptionContainer}>
              <div>{walletAddress}</div>
              <QRIcon className={styles.Icon} />
              <CopyIcon className={styles.Icon} />
            </HStack>
          </HStack>
        </div>
        {isLoading ? (
          <HStack className={styles.Description}>
            <WalletDescription
              title="TOTAL TRANSACTIONS"
              value={"loading..."}
            />
            <WalletDescription title="BALANCE" value={"loading..."} />
            <WalletDescription title="CONX VALUE" value={"loading..."} />
          </HStack>
        ) : (
          <HStack className={styles.Description}>
            <WalletDescription
              title="TOTAL TRANSACTIONS"
              value={walletStatus[0]?.tx_count}
            />
            <WalletDescription
              title="BALANCE"
              value={`${FormatValue("500000000")} CONX`}
            />
            <WalletDescription
              title="CONX VALUE"
              value={`$${FormatValue("500000000")} (0.0000007344 ETH)`}
            />
          </HStack>
        )}
        <Box className={styles.TableHeader} position="start">
          <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
          <Pagination
            handleLatest={handleLatest}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </Box>
        <Table>
          {activeTab === "txns" ? txnsData : <div>No Code Data</div>}
        </Table>
      </VStack>
    </div>
  );
}

export default WalletDetails;
