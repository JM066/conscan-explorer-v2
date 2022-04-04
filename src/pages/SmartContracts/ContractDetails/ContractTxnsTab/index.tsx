import React from "react";
import useStore from "@/store/store";
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
  const isMobile = useStore((state) => state.isMobile);

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
            hashLeft={isMobile ? 5 : 15}
            hashRight={isMobile ? 5 : 15}
          />
        </div>
        <FromToTxnCell
          from={txns.tx_from}
          to={txns.tx_to}
          leftHash={isMobile ? 4 : 15}
          rightHash={isMobile ? 4 : 15}
        />

        <ActionCell
          isMobile={isMobile}
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
