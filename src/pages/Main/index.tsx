import React from "react";
import useWebSocket from "@/hooks/useWebSocket";

import StatsBlock from "./StatsBlock";
import StatsCell from "./StatsBlock/StatsCell";
import GraphCell from "./StatsBlock/GraphCell";
import BlocksActivitySection from "./BlocksActivitySection";
import TxnActivitySection from "./TxnActivitySection";

import styles from "./Main.module.scss";

function Main() {
  useWebSocket();
  return (
    <div className={styles.Container}>
      <StatsBlock className={styles.SubStatsTop}>
        <StatsCell />
        <GraphCell />
      </StatsBlock>
      <StatsBlock className={styles.SubStatsBottom}>
        <BlocksActivitySection />
        <TxnActivitySection />
      </StatsBlock>
    </div>
  );
}

export default Main;
