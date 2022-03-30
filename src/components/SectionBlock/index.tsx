import React from "react";
import classNames from "classnames";
import styles from "./SectionBlock.module.scss";

interface Props {
  className?: string;
  hasBorder?: boolean;
  children: React.ReactNode;
  position?: "top" | "bottom";
}
function SectionBlock({
  children,
  className,
  hasBorder,
  position = "top",
}: Props) {
  return (
    <div className={classNames(styles.NetworkStats, className)}>
      <div className={classNames(styles.Statbox, styles[position])}>
        <div
          className={classNames(styles.InnerBox, {
            [styles.borderRight]: hasBorder,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default SectionBlock;
