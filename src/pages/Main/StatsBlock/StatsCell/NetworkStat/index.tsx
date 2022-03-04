import React from "react";
import classNames from "classnames";
import Hstack from "@/components/HStack/index";
import styles from "./NetworkStat.module.scss";

type StatType = {
  blocks: string;
  title: string;
  value?: string;
  icon: React.ReactNode;
  className?: string;
  hasBorder: boolean;
  position?: "top" | "bottom";
};
function NetworkStats({
  blocks,
  title,
  value,
  icon,
  className,
  hasBorder = false,
  position = "top",
}: StatType) {
  return (
    <div className={classNames(styles.NetworkStats, className)}>
      <div className={classNames(styles.Statbox, styles[position])}>
        <div
          className={classNames(styles.InnerBox, {
            [styles.borderRight]: hasBorder,
          })}
        >
          <Hstack className={styles.CenterBox}>
            <div className={styles.StatIcon}>{icon}</div>
            <div className={styles.StatDataContainer}>
              <div className={styles.Title}>{title}</div>
              <div className={styles.Numbers}>{blocks}</div>
              <div className={styles.CoinVal}>{value}</div>
            </div>
          </Hstack>
        </div>
      </div>
    </div>
  );
}

export default NetworkStats;
