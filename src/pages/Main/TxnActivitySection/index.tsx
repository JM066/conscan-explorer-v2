import React from "react";

import Title from "@/components/Title";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import Table from "@/components/Table";
import TxnTable from "@/components/Table/TxnTable";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import useTxnActivity from "@/hooks/useTxnActivity";

import { TxnActivityDataType } from "@/types/index";

import styles from "./TxnActivitySection.module.scss";

function TxnActivitySection() {
  const { txnActivityData, loadingTxnActivityData } = useTxnActivity();

  console.log("txnActivityData", txnActivityData);
  return (
    <VStack className={styles.TableContainer}>
      <Box justify="center">
        <Title title="Recent Transactions"></Title>
      </Box>

      {loadingTxnActivityData ? (
        <Loading />
      ) : (
        <Table className={styles.TxnTable}>
          {txnActivityData.map((txn: TxnActivityDataType, index: number) => (
            <TxnTable key={index} txn={txn} index={index} />
          ))}
        </Table>
      )}
      <div className={styles.ViewBlocks}>
        <Button link={"/blocks/"}>View More Transaction</Button>
      </div>
    </VStack>
  );
}

export default TxnActivitySection;
