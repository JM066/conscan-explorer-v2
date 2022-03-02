import React from "react";

import Title from "@/components/Title";
import Loading from "@/components/Loading";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import HStack from "@/components/HStack";
import Button from "@/components/Button";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import ActionCell from "@/components/Table/ActionCell";
import VStack from "@/components/VStack";
import Box from "@/components/Box";

import useLatestActivityData from "@/hooks/useLatestActivityData";

import { getTxnsIcon } from "@/helpers/index";

import { TxnActivityDataType } from "@/types/index";
import styles from "./TxnActivitySection.module.scss";

function TxnActivitySection({ channelHash }: { channelHash: string }) {
  const { latestData, isLoading } = useLatestActivityData(
    channelHash,
    "txActivity"
  );

  return (
    <VStack className={styles.TableContainer}>
      <Box position="center">
        <Title title="Recent Transactions"></Title>
      </Box>

      {isLoading ? (
        <Loading />
      ) : (
        <Table className={styles.Table}>
          {latestData.map((txns: TxnActivityDataType, index: number) => {
            const txnsIcon = getTxnsIcon(txns?.chaincodename);
            return (
              <Row key={index} className={styles.RowContainer}>
                <HStack className={styles.Row}>
                  <Button variant="ghost">
                    <Cell>{txnsIcon}</Cell>
                  </Button>
                  <Button variant="ghost">
                    <HashTimeCell
                      variant="dark-grey"
                      className={styles.HashTimeCell}
                      identicon
                      hash={txns.txhash}
                      time={txns.createdt}
                      link={`Txns/${txns.txhash}`}
                      index={index}
                      hashLeft={6}
                      hashRight={4}
                    />
                  </Button>
                  <Button variant="ghost">
                    <FromToTxnCell
                      className={styles.FromToTxnCell}
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
                  />
                </HStack>
              </Row>
            );
          })}
        </Table>
      )}
      <div className={styles.ViewBlocks}>
        <Button link={"/txns/"}>View More Transaction</Button>
      </div>
    </VStack>
  );
}

export default TxnActivitySection;
