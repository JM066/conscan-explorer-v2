import React from "react";

import StatsBlock from "./StatsBlock";
import StatsCell from "./StatsBlock/StatsCell";
import GraphCell from "./StatsBlock/GraphCell";
import BlocksActivitySection from "./BlocksActivitySection";
import TxnActivitySection from "./TxnActivitySection";
import { WebSocketContextProvider } from "../../websocket/websocket";

import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.Container}>
      <StatsBlock className={styles.SubStatsTop}>
        <StatsCell />
        <GraphCell />
      </StatsBlock>
      <StatsBlock className={styles.SubStatsBottom}>
        <WebSocketContextProvider>
          <BlocksActivitySection />
          <TxnActivitySection />
        </WebSocketContextProvider>
      </StatsBlock>
    </div>
  );
}

export default Main;
