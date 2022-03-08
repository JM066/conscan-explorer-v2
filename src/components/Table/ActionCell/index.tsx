import classNames from "classnames";
import Cell from "@/components/Table/Cell";
import Wrapper from "@/components/Table/Wrapper";
import { getActionValue, getTxnsActionIcon } from "@/helpers/index";
import ContractIcon from "@/components/ContractIcon";
import styles from "./ActionCell.module.scss";

interface Props {
  action: string;
  value: string;
  coinName: string;
  className?: string;
  isItFromSmartContact?: boolean;
}

function ActionCell({
  action,
  value,
  coinName,
  isItFromSmartContact,
  className,
}: Props) {
  const { txValue, txCoin } = getActionValue(action, value, coinName);
  const actionIcon = getTxnsActionIcon(action);
  if (isItFromSmartContact) {
    return (
      <Cell
        grow
        className={classNames(styles.SmartContractActionCell, className)}
      >
        <ContractIcon contractName={coinName} className={styles.ContractIcon} />
        <div>{actionIcon}</div>
        <div> {txValue && txValue}</div>
        <div> {txCoin && txCoin}</div>
      </Cell>
    );
  }
  return (
    <Cell grow className={classNames(styles.ActionCell, className)}>
      <div>{actionIcon}</div>
      <Wrapper>
        <div> {txValue && txValue}</div>
        <div> {txCoin && txCoin}</div>
      </Wrapper>
    </Cell>
  );
}

export default ActionCell;
