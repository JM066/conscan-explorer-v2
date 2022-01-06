import React from "react";

import TwinPanel from "@/components/TwinPanel";

import NetworkStats from "./NetworkStats";
import Services from "./Services";

import styles from "./StatsCell.module.scss";

function StatsCell() {
  return (
    <TwinPanel isLeft className={styles.Container}>
      <NetworkStats />
      <Services />
    </TwinPanel>
  );
}

export default StatsCell;
