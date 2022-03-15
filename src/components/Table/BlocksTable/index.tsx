import React from "react";

import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Button from "@/components/Button";
import HashTimeCell from "@/components/Table/HashTimeCell";
import TxnsCell from "@/components/Table/TxnsCell";
import { BlockActivityDataType } from "@/types/index";

import styles from "./BlocksTable.module.scss";

function BlocksTable({
  block,
  activityId,
}: {
  block: BlockActivityDataType;
  activityId: string;
}) {
  return (
    <Row className={styles.BlocksRow}>
      <Button variant="ghost" className={styles.NumberCell}>
        <Cell>
          <p>{block.blocknum}</p>
        </Cell>
      </Button>
      <HashTimeCell
        variant="dark-grey"
        hash={block.blockhash}
        time={block.createdt}
        activityId={activityId}
        identicon
        hashLeft={15}
        hashRight={15}
        className={styles.HashCell}
        link={`/blocks/${block.blocknum}`}
      />
      <TxnsCell className={styles.TxnsCell} txcount={block.txcount} />
    </Row>
  );
}
export default BlocksTable;
