import React, { useState } from "react";

import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Title from "@/components/Title";
import Box from "@/components/Box";
import VStack from "@/components/VStack/index";
import Pagination from "@/components/Pagination";
import DuplicatedSkeleton from "@/components/DuplicatedSkeleton";
import Cell from "@/components/Table/Cell";
import HStack from "@/components/HStack";
import Button from "@/components/Button";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import ActionCell from "@/components/Table/ActionCell";
import ErrorMessage from "@/components/ErrorMessage";

import useActivityData from "@/hooks/useActivityData";
import useChannelStatistics from "@/hooks/useChannelStatistics";

import { getTxnsIcon } from "@/helpers/index";

import { TxnActivityDataType } from "@/types/index";
import styles from "./Txns.module.scss";

interface Props {
  channelHash: string;
  latestTxns: TxnActivityDataType[];
}
function Txns({ channelHash, latestTxns }: Props) {
  const channelStatistics = useChannelStatistics(channelHash);
  const [currentPage, setCurrentPage] = useState<number>(latestTxns[0].id);
  const { activeData, isLoading, isError, error } = useActivityData(
    channelHash,
    currentPage,
    "txActivity"
  );
  console.log("activeData", activeData);
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
    <div className={styles.TxnsPage}>
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
          {activeData?.row.map((txns: TxnActivityDataType, index: number) => {
            const txnsIcon = getTxnsIcon(txns?.chaincodename);
            return (
              <Row key={txns.id} className={styles.RowContainer}>
                <HStack className={styles.Row}>
                  <Button link={`/txns/${txns.txhash}`}>
                    <Cell>{txnsIcon}</Cell>
                  </Button>

                  <HashTimeCell
                    variant="green"
                    className={styles.HashTimeCell}
                    identicon
                    hash={txns.txhash}
                    time={txns.createdt}
                    link={`/txns/${txns.txhash}`}
                    index={index}
                    hashLeft={15}
                    hashRight={15}
                  />

                  <FromToTxnCell
                    className={styles.FromToTxnCell}
                    from={txns.tx_from}
                    to={txns.tx_to}
                    leftHash={15}
                    rightHash={15}
                  />
                  <ActionCell
                    className={styles.ActionCell}
                    action={txns.tx_action}
                    value={txns.tx_value}
                    coinName={txns.chaincodename}
                  />
                </HStack>
              </Row>
            );
          })}
        </Table>
      </VStack>
    </div>
  );
}
export default Txns;
