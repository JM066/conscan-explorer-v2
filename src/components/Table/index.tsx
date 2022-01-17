import React from "react";
import classNames from "classnames";

import SmallSpinner from "../Loading";

import styles from "./Table.module.scss";

interface Props {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Table: React.FunctionComponent<Props> = ({
  loading,
  children,
  className,
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
