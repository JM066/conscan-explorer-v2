import React from "react";

import TwinPanel from "@/components/TwinPanel";

import NetworkStats from "./NetworkStats";

import styles from "./StatsCell.module.scss";

function StatsCell() {
  return (
    <TwinPanel isLeft className={styles.Container}>
      <NetworkStats />
    </TwinPanel>
  );
}

export default StatsCell;
