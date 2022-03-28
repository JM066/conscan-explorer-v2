import React, { useState, useEffect } from "react";
import useStore from "@/store/store";
import Box from "@/components/Box/index";
import Button from "@/components/Button/index";
import VStack from "@/components/VStack";
import Pagination from "@/components/Pagination";
import SkeletonTable from "@/components/SkeletonTable";
import DetailRow from "@/components/Table/DetailRow/index";
import Table from "@/components/Table";

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
  const isMobile = useStore((state) => state.isMobile);
  const channelStatistics = useChannelStatistics(channelHash);

  const { isLoading, dataDetails } = useActivityDetailsData(
    channelHash,
    page,
    "block/transactions"
  );

  useEffect(() => {
    setPage(blockNum);
  }, [blockNum]);

  const handlePrev = () => {
    const blockNumber = Math.min(
      dataDetails?.data?.blocknum + 1,
      Number(channelStatistics?.blocks - 1)
    );
    setPage(blockNumber.toString());
  };

  const handleNext = () => {
    const blockNumber = Math.max(dataDetails?.data?.blocknum - 1, 0);
    setPage(blockNumber.toString());
  };
  return (
    <div className={styles.BlockDetailsPage}>
      <div className={styles.BlockDataSection}>
        <Box
          position="start"
          bottomLine={false}
          className={styles.TitleContainer}
          goBackButton={isMobile ? false : true}
          title="Blocks Details"
        >
          {isMobile && (
            <Pagination
              isMobile={isMobile}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          )}
        </Box>

        <VStack className={styles.Table}>
          {isLoading || dataDetails.error ? (
            <SkeletonTable loading={isLoading} row={7} />
          ) : (
            <Table>
              <DetailRow title="Block No." isMobile>
                {dataDetails?.data?.blocknum}
              </DetailRow>
              <DetailRow title="Block Size" isMobile>
                {dataDetails?.data?.blksize}
              </DetailRow>
              <DetailRow title="Timestamp" isMobile>{`${getTimeDistance(
                dataDetails?.data?.createdt
              )} [${getLocalTime(dataDetails?.data?.createdt)}]`}</DetailRow>
              <DetailRow title="Block Hash" isMobile>
                {dataDetails?.data?.blockhash}
              </DetailRow>
              <DetailRow title="Data Hash" isMobile>
                {dataDetails?.data?.datahash}
              </DetailRow>
              <DetailRow title="Previous Hash" isMobile>
                {dataDetails?.data?.prehash}
              </DetailRow>
              <DetailRow title="Transaction" isMobile>
                {dataDetails?.data?.txhash[0].toString()}
              </DetailRow>
            </Table>
          )}
        </VStack>
      </div>
      {!isMobile && (
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
                const blockNumber = Math.max(
                  dataDetails?.data?.blocknum - 1,
                  0
                );
                setPage(blockNumber.toString());
              }}
            >
              <PreviousDownwards />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
export default BlockDetails;
