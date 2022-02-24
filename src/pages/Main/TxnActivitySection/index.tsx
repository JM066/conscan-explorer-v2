import React from "react";

import Title from "@/components/Title";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import Table from "@/components/Table";
import TxnTable from "@/components/Table/TxnTable";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import useLatestTxnsData from "@/hooks/useLatestTxnsData";

import { TxnActivityDataType } from "@/types/index";

import styles from "./TxnActivitySection.module.scss";

function TxnActivitySection() {
  const { latestTxns, isLoading } = useLatestTxnsData();

  return (
    <VStack className={styles.TableContainer}>
      <Box position="center">
        <Title title="Recent Transactions"></Title>
      </Box>

      {isLoading ? (
        <Loading />
      ) : (
        <Table className={styles.TxnTable}>
          {latestTxns.map((txn: TxnActivityDataType, index: number) => (
            <TxnTable key={index} txn={txn} index={index} />
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
