import React, { useMemo } from "react";
import Link from "next/link";

import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import ContractIcon from "@/components/ContractIcon";
import Loading from "@/components/Loading";
import Panel from "@/components/Panel";
import Table from "@/components/Table";
import Title from "@/components/Title";

import useSmartContractList from "src/hooks/useSmartContractList";
import { getTimeDistance } from "@/helpers/index";

import styles from "./SmartContracts.module.scss";

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
          return (
            <div className={styles.NameLinkCell}>
              <ContractIcon contractName={name} />
              <Link href={`/smart-contracts/${name}`}>{name}</Link>
            </div>
          );
        },
      },

      {
        Header: "Version",
        accessor: "version",
      },
      {
        Header: "Total Transactions",
        accessor: "txnCount",
      },
      {
        Header: "Last Updated",
        accessor: (row: any) => getTimeDistance(row.updated),
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
