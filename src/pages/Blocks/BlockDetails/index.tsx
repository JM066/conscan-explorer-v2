import React, { useState } from "react";

import Box from "@/components/Box/index";
import Button from "@/components/Button/index";
import Table from "@/components/Table/index";
import DetailRow from "@/components/Table/DetailRow/index";
import ErrorMessage from "@/components/ErrorMessage";

import useActivityDetailsData from "@/hooks/useActivityDetailsData";
import useChannelStatistics from "@/hooks/useChannelStatistics";

import { getTimeDistance, getLocalTime } from "@/helpers/index";

import NextUpwards from "@/assets/icons/next-upwards.svg";
import PreviousDownwards from "@/assets/icons/previous-downwards.svg";

import styles from "./BlockDetails.module.scss";

function BlockDetails({
  blockNum,
  channelHash,
}: {
  blockNum: string;
  channelHash: string;
}) {
  const [page, setPage] = useState(blockNum);
  const channelStatistics = useChannelStatistics(channelHash);

  const { isLoading, dataDetails, isError, error } = useActivityDetailsData(
    channelHash,
    page,
    "block/transactions"
  );

  if (isError && error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error;
    }
    return <ErrorMessage statusCode={errorMessage?.message} />;
  }

  return (
    <div className={styles.BlockDetailsPage}>
      <div className={styles.BlockDataSection}>
        <Box
          position="start"
          bottomLine={false}
          className={styles.TitleContainer}
          goBackButton
          title="Blocks Details"
        />

        <Table
          className={styles.Table}
          loading={isLoading}
          skeletonRow={7}
          size="small"
        >
          <DetailRow title="Block Number">
            {dataDetails?.data?.blocknum}
          </DetailRow>
          <DetailRow title="Block Size">{dataDetails?.data?.blksize}</DetailRow>
          <DetailRow title="Timestamp">{`${getTimeDistance(
            dataDetails?.data?.createdt
          )} [${getLocalTime(dataDetails?.createdt)}]`}</DetailRow>
          <DetailRow title="Block Hash">
            {dataDetails?.data?.blockhash}
          </DetailRow>
          <DetailRow title="Data Hash">{dataDetails?.data?.datahash}</DetailRow>
          <DetailRow title="Previous Hash">
            {dataDetails?.data?.prehash}
          </DetailRow>
          <DetailRow title="Transaction">
            {dataDetails?.data?.txhash[0].toString()}
          </DetailRow>
        </Table>
      </div>
      <div className={styles.BlueVerticalBar}>
        <div className={styles.ButtonContainer}>
          <Button
            variant="ghost"
            onClick={() => {
              const blockNumber = Math.min(
                dataDetails?.data?.blocknum + 1,
                Number(channelStatistics?.blocks - 1)
              );
              setPage(blockNumber.toString());
            }}
          >
            <NextUpwards />
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              const blockNumber = Math.max(dataDetails?.data?.blocknum - 1, 0);
              setPage(blockNumber.toString());
            }}
          >
            <PreviousDownwards />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default BlockDetails;
