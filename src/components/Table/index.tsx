import React from "react";
import classNames from "classnames";
import styles from "./Table.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  scrollable?: boolean;
}

const Table: React.FunctionComponent<Props> = ({
  children,
  className,
  scrollable,
}) => {
  return (
    <div
      className={classNames(
        styles.TableContainer,
        {
          [styles.scrollable]: scrollable,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Table;
