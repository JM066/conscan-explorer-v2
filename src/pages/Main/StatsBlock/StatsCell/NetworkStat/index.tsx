import React from "react";
import classNames from "classnames";
import VStack from "@/components/HStack/index";
import styles from "./NetworkStat.module.scss";

type StatType = {
  blocks: string;
  title: string;
  value?: string;
  icon: React.ReactNode;
  borderVariant?: "left" | "right" | "top" | "bottom";
};
function NetworkStats({
  blocks,
  title,
  value,
  icon,
  borderVariant = "bottom",
}: StatType) {
  return (
    <VStack className={styles.NetworkStats} centered={false}>
      <div className={classNames(styles.Statbox, styles[borderVariant])}>
        <div>{icon}</div>
        <div>
          <p>{title}</p>
          <p>{blocks}</p>
          <p>{value}</p>
        </div>
      </div>
    </VStack>
  );
}

export default NetworkStats;
