import React, { useState } from "react";

import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Box from "@/components/Box";
import VStack from "@/components/VStack/index";
import Pagination from "@/components/Pagination";

import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import HashTimeCell from "@/components/Table/HashTimeCell";
import TxnsCell from "@/components/Table/TxnsCell";

import useActivityData from "@/hooks/useActivityData";

import { BlockActivityDataType } from "@/types/index";

import styles from "./Blocks.module.scss";

interface Props {
  channelHash: string;
  latestBlocks: BlockActivityDataType[];
}
function Blocks({ channelHash, latestBlocks }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(
    latestBlocks[0].blocknum
  );

  const { activeData, isLoading, isError, error } = useActivityData(
    channelHash,
    currentPage,
    "blockActivity"
  );

  const handleNext = () => {
    if (currentPage >= 10) {
      setCurrentPage((prev) => Math.max(prev - 10, 1));
    }
  };
  const handlePrev = () => {
    if (currentPage < latestBlocks[0].blocknum) {
      setCurrentPage((prev) => Math.min(prev + 10, latestBlocks[0].blocknum));
    }
  };

  const handleLatest = () => {
    setCurrentPage(latestBlocks[0].blocknum);
  };

  const handleOldest = () => {
    setCurrentPage(latestBlocks[0].blocknum % 10);
  };

  if (isError && error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error;
    }
    return <ErrorMessage statusCode={errorMessage?.message} />;
  }

  return (
    <div className={styles.BlocksPage}>
      <VStack className={styles.TableContainer}>
        <Box
          className={styles.TitleContainer}
          goBackButton
          position="start"
          title="Recent Blocks"
        >
          <Pagination
            className={styles.PaginationButtons}
            handleLatest={handleLatest}
            handleOldest={handleOldest}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </Box>
        <Table
          className={styles.Table}
          loading={isLoading}
          skeletonRow={10}
          size="medium"
        >
          {activeData?.map((block: BlockActivityDataType) => {
            return (
              <Row
                key={block.blocknum}
                className={styles.RowContainer}
                fullLength={true}
              >
                <Cell className={styles.BlockNumCell}>
                  <Button link={`/blocks/${block.blocknum}`}>
                    <p>{block.blocknum}</p>
                  </Button>
                </Cell>
                <HashTimeCell
                  identicon
                  className={styles.HashCell}
                  variant="grey"
                  hash={block.blockhash}
                  time={block.createdt}
                  link={`/blocks/${block.blocknum}`}
                  activityId={block.blocknum.toString()}
                  hashLeft={0}
                  hashRight={0}
                />
                <TxnsCell txcount={block.txcount} className={styles.TxnsCell} />
              </Row>
            );
          })}
        </Table>
      </VStack>
    </div>
  );
}
export default Blocks;
