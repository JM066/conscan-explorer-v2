import classNames from "classnames";
import Cell from "@/components/Table/Cell";
import Wrapper from "@/components/Table/Wrapper";
import {
  getActionValue,
  getTxnsActionIcon,
  FormatNumber,
  FormatValue,
} from "@/helpers/index";
import ContractIcon from "@/components/ContractIcon";
import styles from "./ActionCell.module.scss";

interface Props {
  action: string;
  value: string;
  coinName: string;
  className?: string;
  isMobile?: boolean;
  isActionFromSmartContact?: boolean;
}

function ActionCell({
  action,
  value,
  coinName,
  isActionFromSmartContact,
  isMobile,
  className,
}: Props) {
  const { txValue, txCoin } = getActionValue(action, value, coinName);
  const actionIcon = getTxnsActionIcon(action);
  console.log("isMobile?", isMobile);
  if (isActionFromSmartContact) {
    return (
      <Cell className={classNames(styles.SmartContractActionCell, className)}>
        <ContractIcon contractName={coinName} className={styles.Icon} />
        <div className={styles.Icon}>{actionIcon}</div>
        <div> {txValue && `${FormatValue(value).substring(0, 10)}...`}</div>
        <div> {txCoin && txCoin}</div>
      </Cell>
    );
  }
  if (isMobile) {
    return (
      <Cell className={classNames(styles.SmartContractActionCell, className)}>
        <Wrapper>
          <div>{actionIcon}</div>
          <div> {txCoin && txCoin}</div>
        </Wrapper>
      </Cell>
    );
  }
  return (
    <Cell grow className={classNames(styles.ActionCell, className)}>
      <div>{actionIcon}</div>
      <Wrapper>
        <div> {txValue && FormatNumber(parseInt(txValue))}</div>
        <div> {txCoin && txCoin}</div>
      </Wrapper>
    </Cell>
  );
}

export default ActionCell;
