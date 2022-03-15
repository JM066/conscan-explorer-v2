import React from "react";
import classNames from "classnames";

import BridgeIcon from "@/assets/icons/bridge-smart.svg";
import DriveIcon from "@/assets/icons/drive-smart.svg";
import ConxIcon from "@/assets/icons/conx-smart.svg";

import styles from "./ContractIcon.module.scss";

interface Props {
  contractName: string;
  showLabel?: boolean;
  className?: string;
}

function Label({ contractName }: { contractName: string }) {
  return <div>{contractName}</div>;
}

function Icon({ contractName }: { contractName: string }) {
  const contract = contractName.toLowerCase();
  if (contract === "drive") {
    return <DriveIcon className={styles.Icon} />;
  }
  if (contract === "bridge") {
    return <BridgeIcon className={styles.Icon} />;
  }
  return <ConxIcon className={styles.Icon} />;
}

function ContractIcon({ contractName, showLabel, className }: Props) {
  return (
    <div className={classNames(styles.ContractIcon, className)}>
      <Icon contractName={contractName} />
      {showLabel && <Label contractName={contractName} />}
    </div>
  );
}

export default ContractIcon;
