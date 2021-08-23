import React from "react";

import { getContractType } from "@/helpers/index";

import CoinIcon from "@/assets/icons/coin-icon.svg";
import DriveIcon from "@/assets/icons/drive-icon.svg";
import LinkIcon from "@/assets/icons/link-icon.svg";

import styles from "./ContractIcon.module.scss";

interface Props {
  contractName: string;
  showLabel?: boolean;
}

function Label({ contractType }: { contractType: string }) {
  return <div className={styles.Label}>{contractType}</div>;
}

function Icon({ contractType }: { contractType: string }) {
  if (contractType === "coin") {
    return <CoinIcon className={styles.Icon} />;
  }
  if (contractType === "drive") {
    return <DriveIcon className={styles.Icon} />;
  }
  return <LinkIcon className={styles.Icon} />;
}

function ContractIcon({ contractName, showLabel }: Props) {
  const contractType = getContractType(contractName);

  return (
    <div className={styles.ContractIcon}>
      <Icon contractType={contractType} />
      {showLabel && <Label contractType={contractType} />}
    </div>
  );
}

export default ContractIcon;
