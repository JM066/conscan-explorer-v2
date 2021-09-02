import React from "react";

import Panel from "@/components/Panel";
import TwinPanel from "@/components/TwinPanel";

import NetworkStats from "./NetworkStats";

import styles from "./StatsCell.module.scss";

function StatsCell() {
  return (
    <TwinPanel isLeft className={styles.Container}>
      <NetworkStats />
      <Panel className={styles.Bottom}>Bottom</Panel>
    </TwinPanel>
  );
}

export default StatsCell;
