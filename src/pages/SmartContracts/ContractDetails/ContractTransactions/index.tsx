import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import HashTimeCell from "@/components/Table/HashTimeCell";
import FromToTxnCell from "@/components/Table/FromToTxnCell";
import IdenticonLink from "@/components/IdenticonLink";
import ActionCell from "@/components/Table/ActionCell";
import Button from "@/components/Button";

import { TxnActivityDataType } from "@/types/index";
import styles from "./ContractTransactions.module.scss";

interface Props {
  txns: TxnActivityDataType;
}
function ContractTransactions({ txns }: Props) {
  console.log("data", txns);
  return (
    <Table className={styles.ContactTransactionsPage}>
      <Row fullLength={true}>
        <IdenticonLink
          idString={txns.id.toString()}
          link={`/txns/${txns.txhash}`}
        />
        <Button variant="ghost">
          <HashTimeCell
            variant="green"
            hash={txns.txhash}
            time={txns.createdt}
            link={`/txns/${txns.txhash}`}
            activityId={txns.id.toString()}
            hashLeft={15}
            hashRight={15}
          />
        </Button>
        <FromToTxnCell
          from={txns.tx_from}
          to={txns.tx_to}
          leftHash={15}
          rightHash={15}
        />

        <ActionCell
          isItFromSmartContact
          action={txns.tx_action}
          value={txns.tx_value}
          coinName={txns.chaincodename}
        />
      </Row>
    </Table>
  );
}

export default ContractTransactions;
