import React from "react";

import Title from "@/components/Title";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import Table from "@/components/Table";
import Cell from "@/components/Table/Cell";
import TwinPanel from "@/components/TwinPanel";
import Box from "@/components/Box";
import Row from "@/components/Table/Row";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import ActionCell from "@/components/Table/ActionCell";
import useTxnActivity from "@/hooks/useTxnActivity";

import { TxnActivityDataType } from "@/types/index";

import styles from "./TxnActivitySection.module.scss";

function TxnActivitySection() {
  const { txnActivityData, loadingTxnActivityData } = useTxnActivity();

  console.log("txnActivityData", txnActivityData);
  return (
    <TwinPanel className={styles.TableContainer}>
      <Box justify="center">
        <Title title="Recent Transactions"></Title>
      </Box>

      {loadingTxnActivityData ? (
        <Loading />
      ) : (
        <Table className={styles.TxnTable}>
          {txnActivityData.map((txn: TxnActivityDataType, index: number) => (
            <Row key={index}>
              <Cell chaincodename={txn.chaincodename}></Cell>
              <HashTimeCell
                identicon
                hash={txn.txhash}
                time={txn.createdt}
                link={`Txns/${txn.txhash}`}
                index={index}
                hashLeft={6}
                hashRight={4}
              />
              <FromToTxnCell
                from={txn.tx_from}
                to={txn.tx_to}
                leftHash={6}
                rightHash={4}
              />
              <ActionCell
                action={txn.tx_action}
                value={txn.tx_value}
                chaincodename={txn.chaincodename}
              />
            </Row>
          ))}
        </Table>
      )}
      <div className={styles.ViewBlocks}>
        <Button link={"/blocks/"}>View More Transaction</Button>
      </div>
    </TwinPanel>
  );
}

export default TxnActivitySection;
