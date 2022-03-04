import SuccessIcon from "@/assets/icons/success.svg";

import styles from "./ValidityIcon.module.scss";

function ValidityIcon({ validity }: { validity: string }) {
  if (validity === "VALID") {
    return (
      <div className={styles.ValidityIcon}>
        <SuccessIcon />
        <div> {validity}</div>
      </div>
    );
  }

  return (
    <div>
      <div> {validity}</div>
    </div>
  );
}

export default ValidityIcon;
