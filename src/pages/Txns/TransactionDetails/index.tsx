import React, { useState } from "react";

import ValidityIcon from "./ValidityIcon/index";

import Box from "@/components/Box/index";
import Button from "@/components/Button/index";
import Table from "@/components/Table/index";
import Title from "@/components/Title/index";
import ErrorMessage from "@/components/ErrorMessage";
import DuplicatedSkeleton from "@/components/DuplicatedSkeleton";
import DetailRow from "@/components/Table/DetailRow/index";

import useActivityDetailsData from "@/hooks/useActivityDetailsData";

import {
  getTimeDistance,
  getLocalTime,
  FormatValue,
  uniformValue,
} from "@/helpers/index";

import NextUpwards from "@/assets/icons/next-upwards.svg";
import PreviousDownwards from "@/assets/icons/previous-downwards.svg";
import Contract from "@/assets/icons/conx-smart.svg";
import styles from "./TransactionDetails.module.scss";

function TransactionDetails({
  txnHash,
  channelHash,
}: {
  txnHash: string;
  channelHash: string;
}) {
  const [page] = useState(txnHash);

  const { isLoading, dataDetails, isError, error } = useActivityDetailsData(
    channelHash,
    page,
    "transaction"
  );

  if (isError && error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error;
    }
    return <ErrorMessage message={errorMessage?.message} />;
  }
  if (isLoading) {
    return (
      <div className={styles.TxnsDetailsPage}>
        <div className={styles.TxnsDataSection}>
          <Box className={styles.EmptyTitleBox} position="start">
            <Title title="Blocks Details" />
          </Box>
          <DuplicatedSkeleton row={10} />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.TxnsDetailsPage}>
      <div className={styles.TxnsDataSection}>
        <Box
          position="start"
          bottomLine={false}
          className={styles.TitleContainer}
        >
          <Title title="Transaction Details" className={styles.Title} />
        </Box>

        <Table className={styles.Table}>
          <DetailRow
            title="Transaction Hash"
            value={dataDetails?.row?.txhash}
          />
          <DetailRow
            title="Timestamp"
            value={`${getTimeDistance(
              dataDetails?.row?.createdt
            )} [${getLocalTime(dataDetails?.row?.createdt)}]`}
          />
          <DetailRow title="Validity">
            <ValidityIcon validity={dataDetails?.row?.validation_code} />
          </DetailRow>
          <DetailRow title="Contract">
            {dataDetails?.row?.chaincodename ? (
              <div className={styles.ContractIconContainer}>
                <Contract />
                {dataDetails?.row?.chaincodename}
              </div>
            ) : (
              <div>{dataDetails?.row?.chaincodename}</div>
            )}
          </DetailRow>
          <DetailRow title="FROM" value={dataDetails?.row?.tx_from} />
          <DetailRow title="TO" value={dataDetails?.row?.tx_to} />
          <DetailRow title="Action" value={dataDetails?.row?.tx_action} />
          <DetailRow
            title="Value"
            value={
              FormatValue(dataDetails?.row?.tx_value) +
              " " +
              uniformValue(dataDetails?.row?.tx_action)
            }
          />
          <DetailRow
            title="Playload ProposalHash"
            value={dataDetails?.row?.payload_proposal_hash}
          />
        </Table>
      </div>
      <div className={styles.BlueVerticalBar}>
        <div className={styles.ButtonContainer}>
          <Button variant="ghost">
            <NextUpwards />
          </Button>
          <Button variant="ghost">
            <PreviousDownwards />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default TransactionDetails;
