import React from "react";
import classNames from "classnames";

import styles from "./Box.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  justify?: "center" | "between" | "around";
}
function Box({ children, className, justify = "between" }: Props) {
  return (
    <div className={classNames(styles.Box, styles[justify], className)}>
      {children}
    </div>
  );
}

export default Box;
