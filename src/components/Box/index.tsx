import React from "react";
import classNames from "classnames";

import styles from "./Box.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}
function Box({ children, className }: Props) {
  return <div className={classNames(styles.Box, className)}>{children}</div>;
}

export default Box;
