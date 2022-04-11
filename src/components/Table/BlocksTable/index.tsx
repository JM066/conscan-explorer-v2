import React from "react";
import { useRouter } from "next/router";
import useStore from "@/store/store";
import Row from "@/components/Table/Row";
import Button from "@/components/Button";
import HashTimeCell from "@/components/Table/HashTimeCell";
import TxnsCell from "@/components/Table/TxnsCell";
import { BlockActivityDataType } from "@/types/index";

import styles from "./BlocksTable.module.scss";

function BlocksTable({
  block,
}: {
  block: BlockActivityDataType;
  activityId: string;
}) {
  const isMobile = useStore((state) => state.isMobile);
  const router = useRouter();
  return (
    <Row className={styles.BlocksRow}>
      <Button
        variant="ghost"
        className={styles.BoxCell}
        onClick={() => router.push(`/blocks/${block?.blocknum}`)}
      >
        <p className={styles.NumberCell}>{block.blocknum}</p>
        <HashTimeCell
          variant="dark-grey"
          hash={block.blockhash}
          time={block.createdt}
          idString={block.blocknum}
          identicon
          hashLeft={isMobile ? 8 : 15}
          hashRight={isMobile ? 5 : 15}
          className={styles.HashCell}
        />
        <TxnsCell txcount={block.txcount} />
      </Button>
    </Row>
  );
}
export default BlocksTable;
