import React from "react";
import classNames from "classnames";

import styles from "./Box.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  bottomLine?: boolean;
  justify?: "center" | "between" | "around";
  size?: "rectangle" | "square";
}
function Box({
  children,
  className,
  justify = "between",
  size = "rectangle",
  bottomLine = true,
}: Props) {
  return (
    <div
      className={classNames(
        styles.Box,
        styles[justify],
        styles[size],
        { [styles.horizontalLine]: bottomLine },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Box;
