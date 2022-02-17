import React from "react";
import classNames from "classnames";
import styles from "./HStack.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}
function HStack({ children, className, centered = true }: Props) {
  return (
    <div
      className={classNames(styles.HStack, className, {
        [styles.center]: centered,
      })}
    >
      {children}
    </div>
  );
}

export default HStack;
