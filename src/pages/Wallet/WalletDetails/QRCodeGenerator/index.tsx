import React, { useState, useEffect } from "react";
import Image from "next/image";
import QRCode from "qrcode";

import QRIcon from "@/assets/icons/qr_icon.svg";
import styles from "./QRCodeGenerator.module.scss";

function QRCodeGenerator({ walletQR }: { walletQR: string }) {
  const [src, setSrc] = useState("");
  const [toggleQR, setToggleQR] = useState(false);

  useEffect(() => {
    async function generateQR() {
      try {
        const qr = await QRCode.toDataURL(walletQR);
        setSrc(qr);
      } catch (e) {
        console.error(e);
      }
    }
    generateQR();
  }, [walletQR]);

  return (
    <div
      onClick={() => setToggleQR((prev) => !prev)}
      className={styles.QRContainer}
    >
      <QRIcon className={styles.QRIcon} />
      {toggleQR && <Image src={src} alt="qr-code" width={300} height={300} />}
    </div>
  );
}
export default QRCodeGenerator;
