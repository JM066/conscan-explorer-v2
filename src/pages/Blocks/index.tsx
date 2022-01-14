import React, { useState, useEffect } from "react";
import Link from "next/link";

import Table from "@/components/Table";
import Wrapper from "@/components/Table/Wrapper";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Title from "@/components/Title";
import Box from "@/components/Box";
import Loading from "@/components/Loading";
import Panel from "@/components/Panel";
import Pagination from "@/components/Pagination";
import useActiveBlocksData from "@/hooks/useActiveBlocksData";

import styles from "./Blocks.module.scss";

function Blocks({ ...props }) {
  const channelHash = props.channelHash;
  const data = props.latestBlocks.row;
  const [currentPage, setCurrentPage] = useState<number>(data[0].blocknum);
  const { activeBlocksData, isLoading } = useActiveBlocksData(
    channelHash,
    currentPage
  );

  useEffect(() => {
    console.log("blockData", activeBlocksData);
  }, [activeBlocksData]);

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
  if (isLoading) {
    return <Loading />;
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
        <Table>
          {activeBlocksData?.row.map((block: any, index: number) => {
            return (
              <Row key={index}>
                <Cell>
                  <Link href={`/blocks/${block.blocknum}`}>
                    <a>{block.blocknum}</a>
                  </Link>
                </Cell>
                <Cell grow>
                  <Wrapper>
                    <p>{block.blockhash}</p>
                    <p>3 seconds ago</p>
                  </Wrapper>
                </Cell>
                <Cell centered={false}>
                  {block.txcount > 1 ? (
                    <Wrapper>
                      <p>{block.txcount}</p>
                      <p>Transactions</p>
                    </Wrapper>
                  ) : (
                    <Wrapper>
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
