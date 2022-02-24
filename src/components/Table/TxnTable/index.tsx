import React, { useEffect, useState } from "react";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import ActionCell from "@/components/Table/ActionCell";

import { getBlocksActionIcon } from "@/helpers/index";

import { TxnActivityDataType } from "@/types/index";
import styles from "./TxnTable.module.scss";

function TxnTable({ txn, index }: { txn: TxnActivityDataType; index: number }) {
  const [actionIcon, setActionIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    const icon = getBlocksActionIcon(txn?.chaincodename);
    setActionIcon(icon);
  }, []);

  return (
    <Row className={styles.Row}>
      {actionIcon && <Cell>{actionIcon}</Cell>}
      <HashTimeCell
        className={styles.HashTimeCell}
        identicon
        hash={txn.txhash}
        time={txn.createdt}
        link={`Txns/${txn.txhash}`}
        index={index}
        hashLeft={6}
        hashRight={4}
      />
      <FromToTxnCell
        className={styles.FromToTxnCell}
        from={txn.tx_from}
        to={txn.tx_to}
        leftHash={6}
        rightHash={4}
      />
      <ActionCell
        action={txn.tx_action}
        value={txn.tx_value}
        chaincodename={txn.chaincodename}
      />
    </Row>
  );
}
export default TxnTable;
