import React from "react";

import ContractIcon from "@/components/ContractIcon";
import IdenticonLink from "@/components/IdenticonLink";

import { reducedHash } from "@/helpers/hashDisplay";

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
  return <IdenticonLink blocknum={id.toString()} link={"/#"} />;
}

export function ActionValueCell({
  cell: { value: tx_action_value },
}: {
  cell: { value: { tx_action: string; tx_value: string } };
}) {
  return (
    <div className={styles.ActionValue}>
      <div>{tx_action_value.tx_action}</div>
      <div>{tx_action_value.tx_value}</div>
    </div>
  );
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
      <div>{tx_hash_time.createdt.toDateString()}</div>
    </div>
  );
}
