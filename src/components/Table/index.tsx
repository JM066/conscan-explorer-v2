import React from "react";
import classNames from "classnames";
// import { Waypoint } from "react-waypoint";
// import { HeaderGroup, Row } from "react-table";

import SmallSpinner from "../Loading";

import styles from "./Table.module.scss";

interface Props {
  // paginationType?: "INDEX" | "CURSOR";
  // hasMore?: boolean;
  loading?: boolean;
  // onFetchMore?: () => void;
  // onClickRow?: (data: any) => void;
  children: React.ReactNode;
  className?: string;
}

const Table: React.FunctionComponent<Props> = ({
  loading,
  children,
  className,
  // paginationType,
  // hasMore,
  // onFetchMore,
  // onClickRow,
}) => {
  if (loading) {
    return (
      <div className={styles.TableContainer}>{loading && <SmallSpinner />}</div>
    );
  }
  return (
    <div className={classNames(styles.TableContainer, className)}>
      {children}
    </div>
  );
};

export default Table;
