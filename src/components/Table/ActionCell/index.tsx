import Cell from "@/components/Table/Cell";
import Wrapper from "@/components/Table/Wrapper";
import { getActionValue } from "@/helpers/index";

import styles from "./ActionCell.module.scss";

interface Props {
  action: string;
  value: string;
  chaincodename: string;
}

function ActionCell({ action, value, chaincodename }: Props) {
  const { data, currency } = getActionValue(action, value, chaincodename);

  return (
    <Cell grow className={styles.HashCell}>
      <Wrapper className={styles.Wrapper}>
        <p className={styles.HashBox}>{data}</p>
        <p className={styles.HashBox}>{currency}</p>
      </Wrapper>
    </Cell>
  );
}

export default ActionCell;
