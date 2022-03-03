import SuccessIcon from "@/assets/icons/success.svg";

import styles from "./ValidityIcon.module.scss";

function ValidityIcon({ validity }: { validity: string }) {
  if (validity === "VALID") {
    return (
      <div className={styles.ValidityIcon}>
        <SuccessIcon />
        <p>{validity}</p>
      </div>
    );
  }

  return (
    <div>
      <p>{validity}</p>
    </div>
  );
}

export default ValidityIcon;
