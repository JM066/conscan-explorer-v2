import React from "react";

import VStack from "../VStack";

import UnpluggedIcon from "@/assets/icons/unplugged.svg";

import styles from "./Disconnected.module.scss";

function Disconnected() {
  return (
    <VStack centered className={styles.Panel}>
      <UnpluggedIcon className={styles.UnpluggedIcon} />
      <div className={styles.Title}>Uh-oh! The server is disconnected!</div>
    </VStack>
  );
}

export default Disconnected;
