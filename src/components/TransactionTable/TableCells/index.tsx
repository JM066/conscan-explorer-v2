import React from "react";

import ContractIcon from "@/components/ContractIcon";
import IdenticonLink from "@/components/IdenticonLink";

import { getTimeDistance, reducedHash } from "@/helpers/index";

import styles from "./TableCells.module.scss";

export function ContractIconCell({
  cell: { value: chaincodename },
}: {
  cell: { value: string };
}) {
  return <ContractIcon contractName={chaincodename} />;
}

export function IdenticonCell({
  cell: { value: id },
}: {
  cell: { value: string | number };
}) {
  return <IdenticonLink idString={id.toString()} link={"/#"} />;
}

export function ActionValueCell({
  cell: { value: tx_action_value },
}: {
  cell: { value: { tx_action: string; tx_value: string } };
}) {
  switch (tx_action_value.tx_action) {
    case "Transfer":
    case "Mint":
    case "Burn":
      return (
        <div className={styles.ActionValue}>
          {tx_action_value.tx_value.length > 3
            ? ` ${tx_action_value.tx_value.substr(0, 4)}... CONX`
            : `${tx_action_value.tx_value} CONX`}
        </div>
      );
    default:
      return (
        <div className={styles.ActionValue}>
          {tx_action_value.tx_action || "..."}
        </div>
      );
  }
}

export function FromToCell({
  cell: { value: tx_from_to },
}: {
  cell: { value: { tx_to: string; tx_from: string } };
}) {
  return (
    <div className={styles.FromTo}>
      <div>{reducedHash(tx_from_to.tx_from)}</div>
      <div>{reducedHash(tx_from_to.tx_to)}</div>
    </div>
  );
}
export function HashTimeCell({
  cell: { value: tx_hash_time },
}: {
  cell: { value: { txhash: string; createdt: Date } };
}) {
  return (
    <div className={styles.HashTime}>
      <div>{reducedHash(tx_hash_time.txhash)}</div>
      <div>{getTimeDistance(tx_hash_time.createdt)}</div>
    </div>
  );
}
