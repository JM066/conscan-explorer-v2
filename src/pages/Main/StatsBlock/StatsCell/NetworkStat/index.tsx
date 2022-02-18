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
              <p className={styles.Title}>{title}</p>
              <p className={styles.Numbers}>{blocks}</p>
              <p className={styles.CoinVal}>{value}</p>
            </div>
          </Hstack>
        </div>
      </div>
    </div>
  );
}

export default NetworkStats;
