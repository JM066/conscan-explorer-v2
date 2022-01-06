import React from "react";

import Panel from "@/components/Panel";
import Title from "@/components/Title";

import CoinIcon from "@/assets/icons/coin-icon.svg";
import DriveIcon from "@/assets/icons/drive-icon.svg";

import styles from "./Services.module.scss";

function Services() {
  return (
    <Panel className={styles.Services}>
      <div className={styles.TitleRow}>
        <Title className={styles.Title}>App Services</Title>
        <span className={styles.Caption}>
          These are the services we currently provide:
        </span>
      </div>

      <div className={styles.Table}>
        <div className={styles.IconCell}>
          <CoinIcon className={styles.Icon} />
        </div>
        <div className={styles.Label}>CONX</div>
        <div className={styles.Summary}>
          Coin token used for payment of services
        </div>

        <div className={styles.IconCell}>
          <DriveIcon className={styles.Icon} />
        </div>
        <div className={styles.Label}>Drive</div>
        <div className={styles.Summary}>
          Our distributed peer-to-peer file sharing service
        </div>
      </div>
    </Panel>
  );
}

export default Services;
