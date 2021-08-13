import React from "react";

import classNames from "classnames";

import styles from "./Panel.module.scss";

interface Panel {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

function Panel({ children, centered, className }: Panel) {
  return (
    <div
      className={classNames(
        styles.Panel,
        { [styles.center]: centered },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Panel;
