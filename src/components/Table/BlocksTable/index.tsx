import React from "react";

import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import HashTimeCell from "@/components/Table/HashTimeCell";
import TxnsCell from "@/components/Table/TxnsCell";
import { BlockActivityDataType } from "@/types/index";

import styles from "./BlocksTable.module.scss";

function BlocksTable({
  block,
  index,
}: {
  block: BlockActivityDataType;
  index: number;
}) {
  return (
    <Row key={index} className={styles.BlocksRow}>
      <Cell className={styles.NumberCell}>
        <a>{block.blocknum}</a>
      </Cell>
      <HashTimeCell
        hash={block.blockhash}
        time={block.createdt}
        index={index}
        identicon
        hashLeft={15}
        hashRight={15}
        link={`/blocks/${block.blocknum}`}
      />
      <TxnsCell txcount={block.txcount} />
    </Row>
  );
}
export default BlocksTable;
