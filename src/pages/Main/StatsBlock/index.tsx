import React from "react";

import styles from "./StatsBlock.module.scss";

function StatsBlock() {
  return (
    <div className={styles.StatsBlock}>
      <div className={styles.StatsCell}>Left</div>
      <div className={styles.StatsCell}>Right</div>
    </div>
  );
}

export default StatsBlock;
