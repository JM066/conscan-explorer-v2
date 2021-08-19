import ContractIcon from "@/components/ContractIcon";
import classnames from "classnames";
import React from "react";
import { SmartContractDetailsType } from "src/types";
import styles from "./InfoTable.module.scss";

function InfoTable({
  smartContract,
}: {
  smartContract: SmartContractDetailsType;
}) {
  return (
    <div className={styles.Table}>
      <div className={styles.Cell}>
        <div className={styles.CellTitle}>Title</div>
        <div className={styles.CellContents}>{smartContract.name}</div>
      </div>
      <div className={styles.Cell}>
        <div className={styles.CellTitle}>Author</div>
        <div className={styles.CellContents}>CONUN</div>
      </div>
      <div className={styles.Cell}>
        <div className={styles.CellTitle}>Type</div>
        <div className={styles.CellContents}>
          <ContractIcon contractName={smartContract.name} showLabel />
        </div>
      </div>
      <div className={classnames(styles.Cell, styles.DateCell)}>
        <div className={styles.CellTitle}>Updated</div>
        {/* <div className={styles.CellContents}>{smartContract.updated}</div> */}
      </div>
    </div>
  );
}

export default InfoTable;
