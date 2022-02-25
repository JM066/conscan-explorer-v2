import React from "react";
import Cell from "@/components/Table/Cell";
import HStack from "@/components/HStack";
import Button from "@/components/Button";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import ActionCell from "@/components/Table/ActionCell";

import { getTxnsIcon } from "@/helpers/index";

import { TxnActivityDataType } from "@/types/index";
import styles from "./TxnTable.module.scss";

interface Props {
  txn: TxnActivityDataType;
  index: number;
  className?: string;
}
function TxnTable({ txn, index, className }: Props) {
  const txnsIcon = getTxnsIcon(txn?.chaincodename);

  return (
    <HStack className={(styles.Row, className)}>
      <Button variant="ghost">
        <Cell>{txnsIcon}</Cell>
      </Button>
      <Button variant="ghost">
        <HashTimeCell
          variant="dark-grey"
          className={styles.HashTimeCell}
          identicon
          hash={txn.txhash}
          time={txn.createdt}
          link={`Txns/${txn.txhash}`}
          index={index}
          hashLeft={6}
          hashRight={4}
        />
      </Button>
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
        coinName={txn.chaincodename}
      />
    </HStack>
  );
}
export default TxnTable;
