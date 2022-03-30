import React, { useState } from "react";
import useStore from "@/store/store";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Box from "@/components/Box";
import Cell from "@/components/Table/Cell";
import MobileTableHeader from "@/components/MobileTableHeader";
import VStack from "@/components/VStack/index";
import Pagination from "@/components/Pagination";
import SkeletonTable from "@/components/SkeletonTable";
import Button from "@/components/Button";
import IdenticonLink from "@/components/IdenticonLink";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import ActionCell from "@/components/Table/ActionCell";
import ContractIcon from "@/components/ContractIcon";

import useActivityData from "@/hooks/useActivityData";
import useChannelStatistics from "@/hooks/useChannelStatistics";

import { TxnActivityDataType } from "@/types/index";
import styles from "./Txns.module.scss";

interface Props {
  channelHash: string;
  latestTxns: TxnActivityDataType[];
}

function Txns({ channelHash, latestTxns }: Props) {
  const channelStatistics = useChannelStatistics(channelHash);
  const [currentPage, setCurrentPage] = useState<number>(latestTxns[0].id);
  const isMobile = useStore((state) => state.isMobile);

  const { activeData, isLoading, isError } = useActivityData(
    channelHash,
    currentPage,
    "txActivity"
  );

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

  return (
    <div className={styles.TxnsPage}>
      <VStack className={styles.TxnsContainer}>
        {isMobile ? (
          <MobileTableHeader
            header="Recent Transactions"
            headTitles={["TXN Information", "From/To", "Action"]}
          />
        ) : (
          <Box
            className={styles.TitleBox}
            position="start"
            goBackButton
            title="Recent Transactions"
          >
            <Pagination
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
              {activeData?.map((txns: TxnActivityDataType) => {
                return (
                  <Row
                    key={txns.id}
                    className={styles.RowContainer}
                    fullLength={isMobile ? false : true}
                  >
                    <Button
                      link={`/txns/${txns.txhash}`}
                      className={styles.CellIcon}
                    >
                      <ContractIcon contractName={txns?.chaincodename} />
                    </Button>
                    <Cell>
                      <IdenticonLink
                        idString={txns.id}
                        link={`/txns/${txns.txhash}`}
                      />
                      <HashTimeCell
                        variant="green"
                        hash={txns.txhash}
                        time={txns.createdt}
                        hashLeft={isMobile ? 5 : 15}
                        hashRight={isMobile ? 4 : 15}
                      />
                    </Cell>

                    <FromToTxnCell
                      from={txns.tx_from}
                      to={txns.tx_to}
                      leftHash={isMobile ? 6 : 15}
                      rightHash={isMobile ? 4 : 15}
                    />
                    <ActionCell
                      isMobile={isMobile}
                      action={txns.tx_action}
                      value={txns.tx_value}
                      coinName={txns.chaincodename}
                    />
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
export default Txns;
