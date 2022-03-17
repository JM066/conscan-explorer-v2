import React from "react";

import Title from "@/components/Title";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Button from "@/components/Button";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import ActionCell from "@/components/Table/ActionCell";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import ContractIcon from "@/components/ContractIcon";
import useLatestActivityData from "@/hooks/useLatestActivityData";

import { TxnActivityDataType } from "@/types/index";
import styles from "./TxnActivitySection.module.scss";

function TxnActivitySection({ channelHash }: { channelHash: string }) {
  const { latestData, isLoading } = useLatestActivityData(
    channelHash,
    "txActivity"
  );

  return (
    <VStack className={styles.TableContainer}>
      <Box position="center" className={styles.TitleContainer}>
        <Title title="Recent Transactions" className={styles.Title}></Title>
      </Box>

      <Table
        className={styles.Table}
        loading={isLoading}
        skeletonRow={5}
        size="small"
      >
        {latestData?.map((txns: TxnActivityDataType) => {
          return (
            <Row key={txns.id} className={styles.RowContainer}>
              <Button variant="ghost">
                <ContractIcon
                  contractName={txns?.chaincodename}
                  className={styles.ContractIcon}
                />
              </Button>
              <HashTimeCell
                variant="dark-grey"
                identicon
                className={styles.HashTimeCell}
                hash={txns.txhash}
                time={txns.createdt}
                link={`Txns/${txns.txhash}`}
                activityId={txns.id.toString()}
                hashLeft={6}
                hashRight={4}
              />
              <Button variant="ghost" className={styles.FromToTxnCell}>
                <FromToTxnCell
                  from={txns.tx_from}
                  to={txns.tx_to}
                  leftHash={6}
                  rightHash={4}
                />
              </Button>

              <ActionCell
                action={txns.tx_action}
                value={txns.tx_value}
                coinName={txns.chaincodename}
                className={styles.ActionCell}
              />
            </Row>
          );
        })}
      </Table>

      <div className={styles.ViewBlocks}>
        <Button link={"/txns/"}>View More Transaction</Button>
      </div>
    </VStack>
  );
}

export default TxnActivitySection;
