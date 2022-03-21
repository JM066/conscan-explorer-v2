import React, { useState } from "react";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Box from "@/components/Box";
import VStack from "@/components/VStack/index";
import Pagination from "@/components/Pagination";
import SkeletonTable from "@/components/SkeletonTable";
import Button from "@/components/Button";
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
      <VStack className={styles.TableContainer}>
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
                    fullLength={true}
                  >
                    <Button
                      link={`/txns/${txns.txhash}`}
                      className={styles.CellIcon}
                    >
                      <ContractIcon
                        contractName={txns?.chaincodename}
                        className={styles.ContractIcon}
                      />
                    </Button>
                    <HashTimeCell
                      variant="green"
                      identicon
                      hash={txns.txhash}
                      time={txns.createdt}
                      link={`/txns/${txns.txhash}`}
                      activityId={txns.id.toString()}
                      hashLeft={15}
                      hashRight={15}
                      className={styles.HashTimeCell}
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
                  </Row>
                );
              })}
            </Table>
          )}
        </VStack>
      </VStack>
    </div>
  );
}
export default Txns;
