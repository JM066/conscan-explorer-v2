import React from "react";
import { useRouter } from "next/router";
import VStack from "@/components/VStack/index";
import HStack from "@/components/HStack/index";
import Box from "@/components/Box/index";
import Table from "@/components/Table/index";
import Title from "@/components/Title/index";
import Cell from "@/components/Table/Cell/index";
import { BlockDetail } from "@/types/index";

import styles from "./BlockDetails.module.scss";

interface Props {
  status: number;
  data: BlockDetail;
}
function BlockDetails({ status, data }: Props) {
  const router = useRouter();
  console.log("data", data);
  if (status === 400) {
    return router.push(`/error?type=no_response&terms=search`);
  }

  return (
    <div className={styles.TxnsDetailsPage}>
      <p>{data?.blocknum}</p>
      <VStack>
        <Box position="start" bottomLine={false}>
          <Title title="Blocks Details" />
        </Box>
      </VStack>
      <Table className={styles.Table}>
        <p>{data?.blocknum}</p>
        <Cell>
          <div>
            <HStack>
              <p>Block Number</p>
              <span>|</span>
            </HStack>
          </div>

          <p>{data?.blocknum}</p>
        </Cell>
        <Cell>
          <HStack>
            <p>Block Size</p>
            <span>|</span>
          </HStack>
          <p>{data?.blksize}</p>
        </Cell>
        <Cell>
          <HStack>
            <p>Timestamp</p>
            <span>|</span>
          </HStack>
          <p>{data?.blksize}</p>
        </Cell>
      </Table>
    </div>
  );
}
export default BlockDetails;
