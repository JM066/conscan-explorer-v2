import React from "react";
import useWebSocket from "@/hooks/useWebSocket";
// import StatsBlock from "./StatsBlock";
import BlocksActivitySection from "./BlocksActivitySection";
// import TxnActivitySection from "./TxnActivitySection";

import styles from "./Main.module.scss";

function Main() {
  useWebSocket();
  return (
    <div className={styles.Container}>
      {/* <StatsBlock /> */}

      <div className={styles.Tables}>
        <BlocksActivitySection />
        <BlocksActivitySection />
        {/* <TxnActivitySection /> */}
      </div>
    </div>
  );
}

export default Main;
