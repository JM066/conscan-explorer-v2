import Wrapper from "@/components/Table/Wrapper";
import Cell from "@/components/Table/Cell";

import { getReducedHash } from "@/helpers/index";

import styles from "./FromToTxnCell.module.scss";

interface Props {
  from: string;
  to: string;
  leftHash?: number;
  rightHash?: number;
}

function FromToTxnCell({ from, to, leftHash = 6, rightHash = 4 }: Props) {
  return (
    <Cell grow className={styles.HashCell}>
      <Wrapper className={styles.Wrapper}>
        <p className={styles.HashBox}>
          <div className={styles.HashTitleBox}>
            <span>FROM:</span>
          </div>
          <span> {getReducedHash(from, leftHash, rightHash)}</span>
        </p>
        <p className={styles.HashBox}>
          <div className={styles.HashTitleBox}>
            <span>To:</span>
          </div>
          <span> {getReducedHash(to, leftHash, rightHash)}</span>
        </p>
      </Wrapper>
    </Cell>
  );
}
export default FromToTxnCell;
