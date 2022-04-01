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
  if (isActionFromSmartContact) {
    return (
      <Cell
        className={classNames(styles.SmartContractActionCell, {
          [styles.wrapper]: isMobile,
        })}
      >
        <div className={styles.IconContainer}>
          <ContractIcon contractName={coinName} className={styles.Icon} />
          <div className={styles.Icon}>{actionIcon}</div>
        </div>
        <div>
          {!isMobile && (
            <div> {txValue && `${FormatValue(value).substring(0, 10)}...`}</div>
          )}
          <div> {txCoin && txCoin}</div>
        </div>
      </Cell>
    );
  }
  return (
    <Cell className={classNames(styles.ActionCell, className)}>
      {!isMobile && <div>{actionIcon}</div>}
      <Wrapper className={styles.Wrapper}>
        <div> {txValue && FormatNumber(parseInt(txValue))}</div>
        <div> {txCoin && txCoin}</div>
      </Wrapper>
    </Cell>
  );
}

export default ActionCell;
