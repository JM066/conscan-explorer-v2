import Cell from "@/components/Table/Cell";
import Wrapper from "@/components/Table/Wrapper";
import Button from "@/components/Button";
import TransactionIcon from "@/assets/icons/transaction.svg";

import styles from "./TxnsCell.module.scss";

function TxnsCell({ txcount }: { txcount: number }) {
  const singlularOrPlural = txcount > 1 ? "Transactions" : "Transaction";
  return (
    <Cell className={styles.CellWithIcon}>
      <Button link={"txns"}>
        <TransactionIcon className={styles.TransactionIcon} />
      </Button>
      <Wrapper className={styles.Wrapper}>
        <p>{txcount}</p>
        <p>{singlularOrPlural}</p>
      </Wrapper>
    </Cell>
  );
}
export default TxnsCell;
