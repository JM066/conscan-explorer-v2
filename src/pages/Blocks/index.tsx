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
import TxnsCell from "@/components/Table/TxnsCell";

import useActiveBlocksData from "@/hooks/useActiveBlocksData";

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

  const { activeBlocksData, isLoading, isError, error } = useActiveBlocksData(
    channelHash,
    currentPage
  );

  const EmptyRows = Array(10).fill("");

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
    return <ErrorMessage message={errorMessage?.message} />;
  }
  if (isLoading) {
    return (
      <VStack>
        <Box className={styles.EmptyTitleBox} position="start">
          <Title className={styles.Title} title="Recent Blocks" />
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
          <Title className={styles.Title} title="Recent Blocks" />
          <Pagination
            className={styles.PaginationButtons}
            handleLatest={handleLatest}
            handleOldest={handleOldest}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </Box>
        <Table className={styles.Table}>
          {activeBlocksData?.row.map(
            (block: BlockActivityDataType, index: number) => {
              return (
                <Row key={index} className={styles.Row}>
                  <Cell className={styles.BlockNumCell}>
                    <Button link={`/blocks/${block.blocknum}`}>
                      <a>{block.blocknum}</a>
                    </Button>
                  </Cell>
                  <HashTimeCell
                    identicon
                    className={styles.HashCell}
                    hash={block.blockhash}
                    time={block.createdt}
                    link={`/blocks/${block.blocknum}`}
                    index={index}
                    hashRight={0}
                  />
                  <TxnsCell txcount={block.txcount} />
                </Row>
              );
            }
          )}
        </Table>
      </VStack>
    </div>
  );
}
export default Blocks;
