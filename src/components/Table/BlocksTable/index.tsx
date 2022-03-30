import React from "react";

import Row from "@/components/Table/Row";
import Button from "@/components/Button";
import HashTimeCell from "@/components/Table/HashTimeCell";
import TxnsCell from "@/components/Table/TxnsCell";
import { BlockActivityDataType } from "@/types/index";

import styles from "./BlocksTable.module.scss";

function BlocksTable({
  block,
}: // activityId,
{
  block: BlockActivityDataType;
  activityId: string;
}) {
  return (
    <Row className={styles.BlocksRow}>
      <Button variant="ghost" className={styles.NumberCell} link={`/blocks/`}>
        <p>{block.blocknum}</p>
      </Button>
      <HashTimeCell
        variant="dark-grey"
        hash={block.blockhash}
        time={block.createdt}
        idString={block.blocknum}
        identicon
        hashLeft={15}
        hashRight={15}
        link={`/blocks/`}
        className={styles.HashTimeCell}
      />
      <TxnsCell txcount={block.txcount} />
    </Row>
  );
}
export default BlocksTable;
