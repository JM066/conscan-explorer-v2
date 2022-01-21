import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import ActionCell from "@/components/Table/ActionCell";
import { TxnActivityDataType } from "@/types/index";

import styles from "./TxnTable.module.scss";

function TxnTable({ txn, index }: { txn: TxnActivityDataType; index: number }) {
  return (
    <Row className={styles.Row}>
      <Cell chaincodename={txn.chaincodename}></Cell>
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
