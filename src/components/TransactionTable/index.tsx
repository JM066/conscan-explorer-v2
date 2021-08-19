import React, { useMemo } from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import Table from "@/components/Table";
import { TxnActivityDataType } from "src/types";
import ContractIcon from "../ContractIcon";

function TransactionTable({ txnData }: { txnData: TxnActivityDataType[] }) {
  const columns = useMemo(
    () => [
      {
        Header: "Identicon",
      },
      {
        Header: "TXN Hash & Time",
      },
      {
        Header: "Contract Icon",
        accessor: "chaincodename",
        Cell: function IconCell({
          cell: { value: chaincodename },
        }: {
          cell: { value: string };
        }) {
          return <ContractIcon contractName={chaincodename} showLabel />;
        },
      },
      {
        Header: "Action Value",
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
