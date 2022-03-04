import classNames from "classnames";
import Cell from "@/components/Table/Cell";
import Wrapper from "@/components/Table/Wrapper";
import Button from "@/components/Button";
import TransactionIcon from "@/assets/icons/transaction.svg";

import styles from "./TxnsCell.module.scss";

function TxnsCell({
  txcount,
  className,
}: {
  txcount: number;
  className?: string;
}) {
  const singularOrPlural = txcount > 1 ? "Transactions" : "Transaction";
  return (
    <Cell className={classNames(styles.CellWithIcon, className)}>
      <Button link={"txns"}>
        <TransactionIcon className={styles.TransactionIcon} />
      </Button>
      <Wrapper className={styles.Wrapper}>
        <div> {txcount}</div>
        <div> {singularOrPlural}</div>
      </Wrapper>
    </Cell>
  );
}
export default TxnsCell;
