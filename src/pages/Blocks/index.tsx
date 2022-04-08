import React, { useState } from "react";
import { useRouter } from "next/router";
import useStore from "@/store/store";
import MobileTableHeader from "@/components/MobileTableHeader";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Box from "@/components/Box";
import VStack from "@/components/VStack/index";
import Pagination from "@/components/Pagination";
import SkeletonTable from "@/components/SkeletonTable";
import Button from "@/components/Button";
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
  const isMobile = useStore((state) => state.isMobile);
  const router = useRouter();
  const { activeData, isLoading, isError } = useActivityData(
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

  return (
    <div className={styles.BlocksPage}>
      <VStack className={styles.TableCard}>
        {isMobile ? (
          <MobileTableHeader
            header="Recent Blocks"
            headTitles={["Block No.", "Block Hash", "TXN Count"]}
          />
        ) : (
          <Box
            className={styles.TitleContainer}
            goBackButton
            position="start"
            title="Recent Blocks"
          >
            <Pagination
              isMobile={isMobile}
              className={styles.PaginationButtons}
              handleLatest={handleLatest}
              handleOldest={handleOldest}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </Box>
        )}

        <VStack className={styles.TableContainer}>
          {isLoading || isError ? (
            <SkeletonTable loading={isLoading} row={10} size="large" />
          ) : (
            <Table className={styles.Table}>
              {activeData?.map((block: BlockActivityDataType) => {
                return (
                  <Row key={block.blocknum} className={styles.RowContainer}>
                    <Cell className={styles.BlockNumCell}>
                      <Button link={`/blocks/${block?.blocknum}`}>
                        <p>{block.blocknum}</p>
                      </Button>
                    </Cell>

                    <Button
                      variant="ghost"
                      onClick={() => router.push(`/blocks/${block?.blocknum}`)}
                    >
                      <HashTimeCell
                        identicon
                        className={styles.HashCell}
                        variant="grey"
                        hash={block.blockhash}
                        time={block.createdt}
                        idString={block.blocknum}
                        hashLeft={isMobile ? 8 : 0}
                        hashRight={isMobile ? 5 : 0}
                      />
                    </Button>

                    {isMobile ? (
                      <div className={styles.TxnsNumCell}>{block.txcount}</div>
                    ) : (
                      <TxnsCell
                        txcount={block.txcount}
                        className={styles.TxnsNumCell}
                      />
                    )}
                  </Row>
                );
              })}
              {isMobile && (
                <Pagination
                  className={styles.MobilePaginationButtons}
                  handleLatest={handleLatest}
                  handleOldest={handleOldest}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
              )}
            </Table>
          )}
        </VStack>
      </VStack>
    </div>
  );
}
export default Blocks;
