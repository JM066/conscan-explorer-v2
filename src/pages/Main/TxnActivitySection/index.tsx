import React from "react";
import useStore from "@/store/store";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Button from "@/components/Button";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import SkeletonTable from "@/components/SkeletonTable";
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
  const isMobile = useStore((state) => state.isMobile);

  return (
    <VStack className={styles.TableContainer}>
      <Box
        position="center"
        title="Recent Transactions"
        className={styles.TitleContainer}
      ></Box>
      {isLoading ? (
        <SkeletonTable loading={isLoading} row={5} />
      ) : (
        <Table className={styles.Table}>
          {latestData?.map((txns: TxnActivityDataType) => {
            return (
              <Row
                key={txns.id}
                noSpaceAround={isMobile}
                className={styles.RowContainer}
              >
                <Button
                  variant="ghost"
                  link={`txns`}
                  className={styles.ContractButton}
                >
                  <ContractIcon contractName={txns?.chaincodename} />
                </Button>
                <HashTimeCell
                  identicon
                  variant="dark-grey"
                  hash={txns.txhash}
                  time={txns.createdt}
                  hashLeft={isMobile ? 5 : 8}
                  hashRight={isMobile ? 4 : 8}
                  idString={txns.id}
                  link={`/txns/`}
                />
                <FromToTxnCell
                  from={txns.tx_from}
                  to={txns.tx_to}
                  leftHash={isMobile ? 6 : 10}
                  rightHash={isMobile ? 4 : 10}
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
        </Table>
      )}

      <div className={styles.ViewBlocks}>
        <Button link={"/txns/"}>View More Transaction</Button>
      </div>
    </VStack>
  );
}

export default TxnActivitySection;
