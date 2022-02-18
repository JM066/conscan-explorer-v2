import React from "react";
import VStack from "../VStack";

import styles from "./Loading.module.scss";

function Loading() {
  return (
    <VStack centered className={styles.VStack}>
      <div className={styles.Loader}>
        <div></div>
      </div>
    </VStack>
  );
}

export default Loading;
