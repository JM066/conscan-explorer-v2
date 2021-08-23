import React, { useMemo } from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import Table from "@/components/Table";

import ContractIcon from "../ContractIcon";
import styles from "./TransactionTable.module.scss";

function IconCell({
  cell: { value: chaincodename },
}: {
  cell: { value: string };
}) {
  return <ContractIcon contractName={chaincodename} />;
}

function ActionValueCell({
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
function FromToCell({
  cell: { value: tx_from_to },
}: {
  cell: { value: { tx_to: string; tx_from: string } };
}) {
  return (
    <div className={styles.FromTo}>
      <div>{tx_from_to.tx_from}</div>
      <div>{tx_from_to.tx_to}</div>
    </div>
  );
}
function HashTimeCell({
  cell: { value: tx_hash_time },
}: {
  cell: { value: { txhash: string; createdt: Date } };
}) {
  return (
    <div className={styles.HashTime}>
      <div>{tx_hash_time.txhash}</div>
      <div>{tx_hash_time.createdt.toDateString()}</div>
    </div>
  );
}

function TransactionTable({ txnData }: { txnData: any[] | undefined }) {
  // The txnData type here has to be any to keep TypeScript happy :(
  const columns = useMemo(
    () => [
      {
        Header: "Identicon",
        accessor: "id",
      },
      {
        Header: "TXN Hash & Time",
        accessor: "tx_hash_time",
        Cell: HashTimeCell,
      },
      {
        Header: "Contract Icon",
        accessor: "chaincodename",
        Cell: IconCell,
      },
      {
        Header: "To From",
        accessor: "tx_from_to",
        Cell: FromToCell,
      },
      {
        Header: "Action Value",
        accessor: "tx_action_value",
        Cell: ActionValueCell,
      },
    ],
    []
  );
  const tableInstance = useTable(
    {
      columns,
      data: txnData || [],
    },
    useFlexLayout,
    useResizeColumns
  );

  return <Table instance={tableInstance} />;
}

export default TransactionTable;
