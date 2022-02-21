import React from "react";
import classNames from "classnames";

import styles from "./Box.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  bottomLine?: boolean;
  position?: "start" | "center" | "end";
}
function Box({
  children,
  className,
  position = "center",

  bottomLine = true,
}: Props) {
  return (
    <div
      className={classNames(
        styles.Box,
        styles[position],

        { [styles.horizontalLine]: bottomLine },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Box;
