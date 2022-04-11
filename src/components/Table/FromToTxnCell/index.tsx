import classNames from "classnames";
import Wrapper from "@/components/Table/Wrapper";
import Cell from "@/components/Table/Cell";

import { getReducedHash } from "@/helpers/index";

import styles from "./FromToTxnCell.module.scss";

interface Props {
  from: string;
  to: string;
  leftHash: number;
  rightHash: number;
  className?: string;
  isMobile?: boolean;
}

function FromToTxnCell({
  from,
  to,
  leftHash,
  rightHash,
  className,
  isMobile,
}: Props) {
  return (
    <Cell className={classNames(styles.HashCell, className)}>
      <Wrapper className={styles.Wrapper}>
        <div className={styles.HashBox}>
          {!isMobile && <div className={styles.HashTitleBox}>FROM:</div>}
          <div>{getReducedHash(from, leftHash, rightHash)}</div>
        </div>
        <div className={styles.HashBox}>
          {!isMobile && <div className={styles.HashTitleBox}>TO:</div>}
          <div>{getReducedHash(to, leftHash, rightHash)}</div>
        </div>
      </Wrapper>
    </Cell>
  );
}
export default FromToTxnCell;
