import React from "react";

import StatsBlock from "./StatsBlock";

import BlocksActivitySection from "@/components/Layout/PageContainer/BlocksActivitySection";

import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.Container}>
      <StatsBlock />
      <div className={styles.Tables}>
        <BlocksActivitySection />
        <BlocksActivitySection />
      </div>
    </div>
  );
}

export default Main;
