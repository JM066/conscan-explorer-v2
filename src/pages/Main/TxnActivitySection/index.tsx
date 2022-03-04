import React from "react";

import Title from "@/components/Title";
import Loading from "@/components/Loading";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
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
          {latestData.map((txns: TxnActivityDataType) => {
            const txnsIcon = getTxnsIcon(txns?.chaincodename);
            return (
              <Row key={txns.id} className={styles.RowContainer}>
                <Button variant="ghost" className={styles.IconCell}>
                  <Cell>{txnsIcon}</Cell>
                </Button>
                <Button variant="ghost" className={styles.HashTimeCell}>
                  <HashTimeCell
                    variant="dark-grey"
                    identicon
                    hash={txns.txhash}
                    time={txns.createdt}
                    link={`Txns/${txns.txhash}`}
                    activityId={txns.id.toString()}
                    hashLeft={6}
                    hashRight={4}
                  />
                </Button>
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
      )}
      <div className={styles.ViewBlocks}>
        <Button link={"/txns/"}>View More Transaction</Button>
      </div>
    </VStack>
  );
}

export default TxnActivitySection;
