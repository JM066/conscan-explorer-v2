import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import QRCode from "qrcode";

import Box from "@/components/Box";
import Button from "@/components/Button";
import QRIcon from "@/assets/icons/qr_icon.svg";
import styles from "./QRCodeGenerator.module.scss";

function QRCodeGenerator({
  walletQR,
  className,
}: {
  walletQR: string;
  className?: string;
}) {
  const [src, setSrc] = useState("");
  const [toggleQR, setToggleQR] = useState(false);

  useEffect(() => {
    async function generateQR() {
      try {
        const qr = await QRCode.toDataURL(
          `${process.env.NEXT_PUBLIC_API_URL}/wallet/${walletQR}`
        );
        setSrc(qr);
      } catch (e) {
        console.error(e);
      }
    }
    generateQR();
  }, [walletQR]);

  return (
    <Button
      variant="ghost"
      onClick={() => setToggleQR((prev) => !prev)}
      className={classNames(styles.QRContainer, className)}
    >
      <QRIcon className={styles.QRIcon} />
      {toggleQR && (
        <div className={styles.QRPopUP}>
          <Box bottomLine className={styles.Header}>
            Wallet Address QR Code
          </Box>
          <div className={styles.QRCode}>
            <Image src={src} alt="qr-code" width={500} height={500} />
          </div>

          <div className={styles.Address}>
            <p>{walletQR}</p>
          </div>
        </div>
      )}
    </Button>
  );
}
export default QRCodeGenerator;
