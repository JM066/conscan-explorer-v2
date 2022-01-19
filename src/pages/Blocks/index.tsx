import React, { useState } from "react";
import Link from "next/link";

import useActiveBlocksData from "@/hooks/useActiveBlocksData";

import Table from "@/components/Table";
import Wrapper from "@/components/Table/Wrapper";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Title from "@/components/Title";
import Box from "@/components/Box";
import Panel from "@/components/Panel";
import Pagination from "@/components/Pagination";
import DuplicatedSkeleton from "@/components/DuplicatedSkeleton";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import IdenticonLink from "@/components/IdenticonLink";
import TimeStamp from "@/components/TimeStamp";
import TransactionIcon from "@/assets/icons/transaction.svg";
import styles from "./Blocks.module.scss";

function Blocks({ ...props }) {
  const channelHash = props.channelHash;
  const data = props.latestBlocks.row;
  const [currentPage, setCurrentPage] = useState<number>(data[0].blocknum);
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
    if (currentPage < data[0].blocknum) {
      setCurrentPage((prev) => Math.min(prev + 10, data[0].blocknum));
    }
  };

  const handleLatest = () => {
    setCurrentPage(data[0].blocknum);
  };

  const handleOldest = () => {
    setCurrentPage(data[0].blocknum % 10);
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
      <Panel>
        <Box className={styles.EmptyTitleBox}>
          <Title className={styles.Title} title="Recent Blocks" />
        </Box>
        <Table>
          {EmptyRows.map((index: number) => (
            <DuplicatedSkeleton key={index} />
          ))}
        </Table>
      </Panel>
    );
  }
  return (
    <div className={styles.BlocksPage}>
      <Panel>
        <Box className={styles.TitleBox}>
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
          {activeBlocksData?.row.map((block: any, index: number) => {
            return (
              <Row key={index}>
                <Cell className={styles.BlockNumCell}>
                  <Link href={`/blocks/${block.blocknum}`}>
                    <a>{block.blocknum}</a>
                  </Link>
                </Cell>
                <Cell grow className={styles.HashCell}>
                  <IdenticonLink
                    idString={index.toString()}
                    link={`/blocks/${block.blocknum}`}
                  />
                  <Wrapper className={styles.Wrapper}>
                    <p>{block.blockhash}</p>
                    <TimeStamp className={styles.Time} time={block.createdt} />
                  </Wrapper>
                </Cell>
                <Cell centered={false} className={styles.CellWithIcon}>
                  <Button link={"txns"}>
                    <TransactionIcon className={styles.TransactionIcon} />
                  </Button>

                  {block.txcount > 1 ? (
                    <Wrapper className={styles.Wrapper}>
                      <p>{block.txcount}</p>
                      <p>Transactions</p>
                    </Wrapper>
                  ) : (
                    <Wrapper className={styles.Wrapper}>
                      <p>{block.txcount}</p>
                      <p>Transaction</p>
                    </Wrapper>
                  )}
                </Cell>
              </Row>
            );
          })}
        </Table>
      </Panel>
    </div>
  );
}
export default Blocks;
