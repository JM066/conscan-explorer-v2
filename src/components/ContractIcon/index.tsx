import React from "react";
import classNames from "classnames";

import Button from "@/components/Button";
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
  if (contractName === "drive") {
    return <DriveIcon className={styles.Icon} />;
  }
  if (contractName === "bridge") {
    return <BridgeIcon className={styles.Icon} />;
  }
  return <ConxIcon className={styles.Icon} />;
}

function ContractIcon({ contractName, showLabel, className }: Props) {
  return (
    <div className={classNames(styles.ContractIcon, className)}>
      <Button variant="ghost">
        <Icon contractName={contractName} />
      </Button>
      {showLabel && <Label contractName={contractName} />}
    </div>
  );
}

export default ContractIcon;
