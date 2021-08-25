import React, { useMemo } from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import Table from "@/components/Table";

import {
  IdenticonCell,
  ContractIconCell,
  ActionValueCell,
  HashTimeCell,
  FromToCell,
} from "./TableCells";

function TransactionTable({ txnData }: { txnData: any[] | undefined }) {
  // The txnData type here has to be any to keep TypeScript happy :(
  const columns = useMemo(
    () => [
      {
        Header: "Identicon",
        accessor: "id",
        Cell: IdenticonCell,
        hideHeader: true,
      },
      {
        Header: "TXN Hash & Time",
        accessor: "tx_hash_time",
        Cell: HashTimeCell,
        hideHeader: true,
      },
      {
        Header: "Contract Icon",
        accessor: "chaincodename",
        Cell: ContractIconCell,
        hideHeader: true,
      },
      {
        Header: "To From",
        accessor: "tx_from_to",
        Cell: FromToCell,
        hideHeader: true,
      },
      {
        Header: "Action Value",
        accessor: "tx_action_value",
        Cell: ActionValueCell,
        hideHeader: true,
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
