import classNames from "classnames";
import Cell from "@/components/Table/Cell/index";
import Row from "@/components/Table/Row/index";
import HStack from "@/components/HStack/index";

import styles from "./DetailRow.module.scss";
import React from "react";

interface Props {
  title: string;
  isMobile?: boolean;
  children?: React.ReactNode;
}

function DetailRow({ title, children, isMobile = false }: Props) {
  return (
    <Row
      className={classNames(styles.RowContainer, {
        [styles.noIndentation]: isMobile,
      })}
    >
      <Cell className={styles.Cell}>
        <div className={styles.TitleCell}>
          <HStack className={styles.Title}>
            <div className={styles.TitleBox}>
              <p>{title}</p>
            </div>
            <div className={styles.Partition}>|</div>
          </HStack>
        </div>
        {children && <div className={styles.Description}>{children}</div>}
      </Cell>
    </Row>
  );
}
export default DetailRow;
