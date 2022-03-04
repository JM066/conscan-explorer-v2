import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Box from "@/components/Box/index";
import Button from "@/components/Button/index";
import Table from "@/components/Table/index";
import Title from "@/components/Title/index";
import VStack from "@/components/VStack";
import DetailRow from "@/components/Table/DetailRow/index";
import ErrorMessage from "@/components/ErrorMessage";
import DuplicatedSkeleton from "@/components/DuplicatedSkeleton";

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
  const router = useRouter();
  const { isLoading, dataDetails, isError, error } = useActivityDetailsData(
    channelHash,
    page,
    "block/transactions"
  );
  const EmptyRows = Array(10).fill("");

  useEffect(() => {
    router.replace(`/blocks/${page}`);
  }, [page]);

  if (isError && error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error;
    }
    return <ErrorMessage message={errorMessage?.message} />;
  }
  if (isLoading) {
    return (
      <VStack>
        <Box className={styles.EmptyTitleBox} position="start">
          <Title title="Blocks Details" />
        </Box>
        <Table>
          {EmptyRows.map((index: number) => (
            <DuplicatedSkeleton key={index} />
          ))}
        </Table>
      </VStack>
    );
  }
  return (
    <div className={styles.BlockDetailsPage}>
      <div className={styles.BlockDataSection}>
        <Box position="start" bottomLine={false}>
          <Title title="Blocks Details" />
        </Box>

        <Table className={styles.Table}>
          <DetailRow title="Block Number" value={dataDetails?.data?.blocknum} />
          <DetailRow title="Block Size" value={dataDetails?.data?.blksize} />
          <DetailRow
            title="Timestamp"
            value={`${getTimeDistance(
              dataDetails?.data?.createdt
            )} [${getLocalTime(dataDetails?.createdt)}]`}
          />
          <DetailRow title="Block Hash" value={dataDetails?.data?.blockhash} />
          <DetailRow title="Data Hash" value={dataDetails?.data?.datahash} />
          <DetailRow title="Previous Hash" value={dataDetails?.data?.prehash} />
          <DetailRow
            title="Transaction"
            value={dataDetails?.data?.txhash[0].toString()}
          />
        </Table>
      </div>
      <div className={styles.BlueVerticalBar}>
        <div className={styles.ButtonContainer}>
          <Button
            variant="ghost"
            onClick={() => {
              const blockNumber = Math.min(
                dataDetails?.data?.blocknum + 1,
                Number(channelStatistics?.blocks)
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
