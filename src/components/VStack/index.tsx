import React from "react";
import classNames from "classnames";

import styles from "./VStack.module.scss";

interface Props {
  className?: string;
  children: React.ReactNode;
  centered?: boolean;
  bordered?: boolean;
}

function VStack({ className, centered = true, children, bordered }: Props) {
  return (
    <div
      className={classNames(
        className,
        { [styles.center]: centered },
        { [styles.border]: bordered },
        styles.VStack
      )}
    >
      {children}
    </div>
  );
}

export default VStack;
