import React from "react";

import Panel from "../Panel";

import UnpluggedIcon from "@/assets/icons/unplugged.svg";

import styles from "./Disconnected.module.scss";

function Disconnected() {
  return (
    <Panel centered className={styles.Panel}>
      <UnpluggedIcon className={styles.UnpluggedIcon} />
      <div className={styles.Title}>Uh-oh! The server is disconnected!</div>
    </Panel>
  );
}

export default Disconnected;
