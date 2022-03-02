import classNames from "classnames";
import Cell from "@/components/Table/Cell";
import Wrapper from "@/components/Table/Wrapper";
import { getActionValue, getTxnsActionIcon } from "@/helpers/index";

import styles from "./ActionCell.module.scss";

interface Props {
  action: string;
  value: string;
  coinName: string;
  className: string;
}

function ActionCell({ action, value, coinName, className }: Props) {
  const { txValue, txCoin } = getActionValue(action, value, coinName);
  const actionIcon = getTxnsActionIcon(action);
  return (
    <Cell grow className={classNames(styles.HashCell, className)}>
      <div>{actionIcon}</div>
      <Wrapper>
        <p>{txValue && txValue}</p>
        <p>{txCoin && txCoin}</p>
      </Wrapper>
    </Cell>
  );
}

export default ActionCell;
