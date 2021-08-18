import React from "react";

import StatsBlock from "../Main/StatsBlock";

import BlocksActivitySection from "@/components/Layout/PageContainer/BlocksActivitySection";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Container}>
      <StatsBlock />
      <div className={styles.Tables}>
        <div className={styles.TablePlaceholder}>
          <BlocksActivitySection />
        </div>
        <div className={styles.TablePlaceholder}>RIGHT TABLE</div>
      </div>
    </div>
  );
}

export default Home;
