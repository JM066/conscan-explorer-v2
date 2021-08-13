import React from "react";
import Panel from "../Panel";

import styles from "./Loading.module.scss";

function Loading() {
  return (
    <Panel centered className={styles.Panel}>
      <div className={styles.Loader}>
        <div />
        <div />
      </div>
    </Panel>
  );
}

export default Loading;
