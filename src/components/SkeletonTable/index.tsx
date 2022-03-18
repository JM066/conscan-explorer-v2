import React from "react";
import classNames from "classnames";

import SmallSpinner from "../SmallSpinner";

import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import styles from "./SkeletonTable.module.scss";

interface Props {
  loading?: boolean;
  className?: string;
  row: number;
  size?: "small" | "medium" | "large";
}

const Table: React.FunctionComponent<Props> = ({
  loading,
  className,
  row,
  size = "small",
}) => {
  const EmptyRows = Array(row).fill("");

  return (
    <div
      className={classNames(styles.DuplicatedSkeleton, {
        className,
      })}
    >
      {EmptyRows.map((row: string, index: number) => (
        <Row key={index} className={classNames(styles.Row, styles[size])}>
          <Cell className={styles.Cell}>{row}</Cell>
          <Cell className={styles.Cell} grow>
            {row}
          </Cell>
          <Cell centered={false} className={styles.Cell}>
            {row}
          </Cell>
        </Row>
      ))}
      {loading && <SmallSpinner />}
    </div>
  );
};

export default Table;
