import React from "react";
import Row from "@/components/Table/Row";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import IdenticonLink from "@/components/IdenticonLink";
import ActionCell from "@/components/Table/ActionCell";
import HStack from "@/components/HStack";

import { TxnActivityDataType } from "@/types/index";
import styles from "./ContractTxnsTab.module.scss";

interface Props {
  txns: TxnActivityDataType;
}
function ContractTxnsTab({ txns }: Props) {
  return (
    <Row fullLength={true} className={styles.Row}>
      <HStack className={styles.InnerRow}>
        <div className={styles.HashTimeCell}>
          <IdenticonLink idString={txns.id} link={`/txns/${txns.txhash}`} />

          <HashTimeCell
            variant="green"
            hash={txns.txhash}
            time={txns.createdt}
            link={`/txns/${txns.txhash}`}
            idString={txns.id}
            hashLeft={15}
            hashRight={15}
          />
        </div>
        <FromToTxnCell
          className={styles.FromToTxnCell}
          from={txns.tx_from}
          to={txns.tx_to}
          leftHash={15}
          rightHash={15}
        />

        <ActionCell
          isActionFromSmartContact
          action={txns.tx_action}
          value={txns.tx_value}
          coinName={txns.chaincodename}
        />
      </HStack>
    </Row>
  );
}

export default ContractTxnsTab;
