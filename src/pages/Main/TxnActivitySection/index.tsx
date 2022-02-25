import React from "react";

import Title from "@/components/Title";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import TxnTable from "@/components/Table/TxnTable";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import useLatestTxnsData from "@/hooks/useLatestTxnsData";

import { TxnActivityDataType } from "@/types/index";

import styles from "./TxnActivitySection.module.scss";

function TxnActivitySection({ channelHash }: { channelHash: string }) {
  const { latestTxns, isLoading } = useLatestTxnsData(channelHash);

  return (
    <VStack className={styles.TableContainer}>
      <Box position="center">
        <Title title="Recent Transactions"></Title>
      </Box>

      {isLoading ? (
        <Loading />
      ) : (
        <Table className={styles.Table}>
          {latestTxns.map((txn: TxnActivityDataType, index: number) => (
            <Row key={index} className={styles.RowContainer}>
              <TxnTable txn={txn} index={index} className={styles.TxnTable} />
            </Row>
          ))}
        </Table>
      )}
      <div className={styles.ViewBlocks}>
        <Button link={"/txns/"}>View More Transaction</Button>
      </div>
    </VStack>
  );
}

export default TxnActivitySection;
