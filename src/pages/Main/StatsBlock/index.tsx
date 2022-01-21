import React from "react";
import classNames from "classnames";
import styles from "./StatsBlock.module.scss";

interface Props {
  children: React.ReactNode;
  className: string;
}
function StatsBlock({ children, className }: Props) {
  return (
    <div className={classNames(styles.StatsBlock, className)}>{children}</div>
  );
}

export default StatsBlock;
