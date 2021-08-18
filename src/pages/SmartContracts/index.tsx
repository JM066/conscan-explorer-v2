import React, { useMemo } from "react";
import Link from "next/link";

import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import Loading from "@/components/Loading";
import Panel from "@/components/Panel";
import Table from "@/components/Table";
import Title from "@/components/Title";

import useSmartContractList from "src/hooks/useSmartContractList";

function SmartContract() {
  const { listOfContracts, loadingContractList } = useSmartContractList();

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: function NameLinkCell({
          cell: { value: name },
        }: {
          cell: { value: string };
        }) {
          return <Link href={`/smart-contracts/${name}`}>{name}</Link>;
        },
      },
      {
        Header: "Version",
        accessor: "version",
      },
      {
        Header: "Txns",
        accessor: "txnCount",
      },
      {
        Header: "Last Updated",
        accessor: "updated",
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data: listOfContracts || [],
    },
    useFlexLayout,
    useResizeColumns
  );

  return (
    <Panel>
      <Title>Smart Contracts</Title>
      {loadingContractList ? (
        <Loading />
      ) : (
        listOfContracts.length && <Table instance={tableInstance} />
      )}
    </Panel>
  );
}

export default SmartContract;
