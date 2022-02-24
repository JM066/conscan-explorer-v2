import React, { useState } from "react";

import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Title from "@/components/Title";
import Box from "@/components/Box";
import VStack from "@/components/VStack/index";
import Pagination from "@/components/Pagination";
import DuplicatedSkeleton from "@/components/DuplicatedSkeleton";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import HashTimeCell from "@/components/Table/HashTimeCell";

import useActiveTxnsData from "@/hooks/useActiveTxnsData";
import useChannelStatistics from "@/hooks/useChannelStatistics";

import { TxnActivityDataType } from "@/types/index";
import styles from "./Txns.module.scss";

function Txns({ ...props }) {
  const channelHash = props.channelHash;
  const latestTxns = props.latestTxns.row;
  const channelStatistics = useChannelStatistics(channelHash);
  const [currentPage, setCurrentPage] = useState<number>(latestTxns[0].id);

  const { activeTxnsData, isLoading, isError, error } = useActiveTxnsData(
    channelHash,
    currentPage
  );

  const EmptyRows = Array(10).fill("");
  const numbsToSubtract = channelStatistics.txns - 10;

  const handleNext = () => {
    if (currentPage >= 10 && currentPage > latestTxns[0].id - numbsToSubtract) {
      setCurrentPage((prev) => Math.max(prev - 10, 1));
    }
  };
  const handlePrev = () => {
    if (currentPage < latestTxns[0].id) {
      setCurrentPage((prev) => Math.min(prev + 10, latestTxns[0].id));
    }
  };

  const handleLatest = () => {
    setCurrentPage(latestTxns[0].id);
  };

  const handleOldest = () => {
    setCurrentPage(latestTxns[0].id - numbsToSubtract);
  };
  if (isError && error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error;
    }
    return <ErrorMessage message={errorMessage?.message} />;
  }

  if (isLoading) {
    return (
      <VStack>
        <Box className={styles.EmptyTitleBox} position="start">
          <Title className={styles.Title} title="Recent Transactions" />
        </Box>
        <Table>
          {EmptyRows.map((index: number) => (
            <DuplicatedSkeleton key={index} />
          ))}
        </Table>
      </VStack>
    );
  }
  return (
    <div className={styles.BlocksPage}>
      <VStack>
        <Box className={styles.TitleBox} position="start">
          <Title className={styles.Title} title="Recent Transactions" />
          <Pagination
            className={styles.PaginationButtons}
            handleLatest={handleLatest}
            handleOldest={handleOldest}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </Box>
        <Table className={styles.Table}>
          {activeTxnsData?.row.map(
            (txns: TxnActivityDataType, index: number) => {
              return (
                <Row key={index} className={styles.Row}>
                  <Cell className={styles.BlockNumCell}>
                    <Button link={`/txns/${txns.id}`}>
                      <a>{txns.id}</a>
                    </Button>
                  </Cell>
                  <HashTimeCell
                    identicon
                    className={styles.HashCell}
                    hash={txns.txhash}
                    time={txns.createdt}
                    link={`/txns/${txns.id}`}
                    index={index}
                    hashRight={0}
                  />
                </Row>
              );
            }
          )}
        </Table>
      </VStack>
    </div>
  );
}
export default Txns;
//BurnFrom
//Mint
