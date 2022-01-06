import classNames from "classnames";
import React from "react";
import Panel from "../Panel";
import styles from "./TwinPanel.module.scss";

interface Props {
  className?: string;
  isLeft?: boolean;
  children: React.ReactNode;
}

function TwinPanel({ className, isLeft, children }: Props) {
  return (
    <Panel
      className={classNames(
        styles.TwinPanel,
        { [styles.isLeft]: isLeft },
        className
      )}
    >
      {children}
    </Panel>
  );
}

export default TwinPanel;
