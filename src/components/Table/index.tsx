import React from "react";
import classNames from "classnames";

import SmallSpinner from "../SmallSpinner";

import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import styles from "./Table.module.scss";

interface Props {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  skeletonRow?: number;
  size: "small" | "medium";
}

const Table: React.FunctionComponent<Props> = ({
  loading,
  children,
  className,
  skeletonRow,
  size = "small",
}) => {
  const EmptyRows = Array(skeletonRow).fill("");
  return (
    <div
      className={classNames(
        styles.TableContainer,
        { [styles.loading]: loading },
        className
      )}
    >
      {loading ? (
        <div className={styles.DuplicatedSkeleton}>
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
          <SmallSpinner />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Table;
