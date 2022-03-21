import React from "react";
import classNames from "classnames";
import styles from "./Table.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Table: React.FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div className={classNames(styles.TableContainer, className)}>
      {children}
    </div>
  );
};

export default Table;
