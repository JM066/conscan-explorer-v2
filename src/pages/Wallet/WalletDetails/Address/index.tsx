import React, { useState } from "react";
import classNames from "classnames";
import QRCodeGenerator from "../QRCodeGenerator";
import CopyButton from "@/components/Button/CopyButton";
import HStack from "@/components/HStack";

import styles from "./Address.module.scss";

function Address({ walletAddress }: { walletAddress: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  return (
    <div className={styles.WalletAddress}>
      <div className={styles.Title}>WALLET ADDRESS</div>
      <HStack className={styles.DescriptionContainer}>
        <div
          className={classNames(styles.Address, {
            [styles.copied]: isCopied,
          })}
        >
          {walletAddress}
        </div>
        <CopyButton
          className={styles.Icon}
          setIsCopied={setIsCopied}
          textToCopy={walletAddress}
        />
        <QRCodeGenerator walletQR={walletAddress} className={styles.Icon} />
      </HStack>
    </div>
  );
}
export default Address;
