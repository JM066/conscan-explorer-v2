import Cell from "@/components/Table/Cell/index";
import Row from "@/components/Table/Row/index";
import HStack from "@/components/HStack/index";

import styles from "./DetailRow.module.scss";
import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

function DetailRow({ title, children }: Props) {
  return (
    <Row className={styles.RowContainer} fullLength={true}>
      <Cell className={styles.Cell}>
        <div className={styles.TitleCell}>
          <HStack className={styles.Title}>
            <div> {title}</div>
            <div className={styles.Partition}>|</div>
          </HStack>
        </div>
        {children && <div className={styles.Children}>{children}</div>}
      </Cell>
    </Row>
  );
}
export default DetailRow;
