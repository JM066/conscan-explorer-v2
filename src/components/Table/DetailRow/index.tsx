import Cell from "@/components/Table/Cell/index";
import Row from "@/components/Table/Row/index";
import HStack from "@/components/HStack/index";

import styles from "./DetailRow.module.scss";
import React from "react";

interface Props {
  title: string;
  value?: string | number;
  children?: React.ReactNode;
}

function DetailRow({ title, value, children }: Props) {
  return (
    <Row className={styles.RowContainer} fullLength={true}>
      <Cell className={styles.Cell}>
        <div className={styles.TitleCell}>
          <HStack className={styles.Title}>
            <p>{title}</p>
            <p className={styles.Partition}>|</p>
          </HStack>
        </div>
        {children && <div>{children}</div>}
        {value && <p className={styles.Value}>{value}</p>}
      </Cell>
    </Row>
  );
}
export default DetailRow;
