import React, { useState } from "react";
import { useRouter } from "next/router";
import useStore from "@/store/store";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Box from "@/components/Box";
import MobileTableHeader from "@/components/MobileTableHeader";
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
  const [page, setPage] = useState<string>(
    localStorage.getItem("page") || latestTxns[0].id.toString()
  );
  const channelStatistics = useChannelStatistics(channelHash);
  const isMobile = useStore((state) => state.isMobile);
  const router = useRouter();
  const { activeData, isLoading, isError } = useActivityData(
    channelHash,
    page,
    "txActivity"
  );
  const numbsToSubtract = channelStatistics.txns - 10;
  const navigation = {
    initial: Number(page),
    prevSteps: 10,
    nextSteps: 10,
    latestPage: latestTxns[0].id,
    oldestPage: latestTxns[0].id - numbsToSubtract,
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
              setPage={setPage}
              isMobile={isMobile}
              className={styles.PaginationButtons}
              navigation={navigation}
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
                      variant="ghost"
                      onClick={() => router.push(`/txns/${txns.txhash}`)}
                      className={styles.CellIcon}
                    >
                      <ContractIcon contractName={txns?.chaincodename} />
                    </Button>
                    <Button
                      variant="ghost"
                      className={styles.HashCell}
                      onClick={() => router.push(`/txns/${txns.txhash}`)}
                    >
                      <HashTimeCell
                        variant="green"
                        identicon
                        idString={txns.id}
                        hash={txns.txhash}
                        time={txns.createdt}
                        hashLeft={isMobile ? 5 : 15}
                        hashRight={isMobile ? 4 : 15}
                      />
                    </Button>

                    <FromToTxnCell
                      from={txns.tx_from}
                      to={txns.tx_to}
                      leftHash={isMobile ? 6 : 15}
                      rightHash={isMobile ? 4 : 15}
                      isMobile={isMobile}
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
                  setPage={setPage}
                  isMobile={isMobile}
                  navigation={navigation}
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
