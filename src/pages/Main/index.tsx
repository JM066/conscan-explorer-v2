import React from "react";

import StatsBlock from "./StatsBlock";

import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.Container}>
      <StatsBlock />
      <div className={styles.Tables}>
        <div className={styles.TablePlaceholder}>LEFT TABLE</div>
        <div className={styles.TablePlaceholder}>RIGHT TABLE</div>
      </div>
    </div>
  );
}

export default Main;
