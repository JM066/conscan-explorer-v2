import React from "react";

// import GraphCell from "./GraphCell";
import StatsCell from "./StatsCell";

import styles from "./StatsBlock.module.scss";

function StatsBlock() {
  return (
    <div className={styles.StatsBlock}>
      <StatsCell />
      {/* <GraphCell /> */}
    </div>
  );
}

export default StatsBlock;
