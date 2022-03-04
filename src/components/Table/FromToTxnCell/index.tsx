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
}

function FromToTxnCell({ from, to, leftHash, rightHash, className }: Props) {
  return (
    <Cell grow className={classNames(styles.HashCell, className)}>
      <Wrapper className={styles.Wrapper}>
        <div className={styles.HashBox}>
          <div className={styles.HashTitleBox}>
            <span>FROM:</span>
          </div>
          <span>{getReducedHash(from, leftHash, rightHash)}</span>
        </div>
        <div className={styles.HashBox}>
          <div className={styles.HashTitleBox}>
            <span>To: </span>
          </div>
          <span> {getReducedHash(to, leftHash, rightHash)}</span>
        </div>
      </Wrapper>
    </Cell>
  );
}
export default FromToTxnCell;
