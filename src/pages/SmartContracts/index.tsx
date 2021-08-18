import React, { useMemo } from "react";
import { useQuery } from "react-query";
import instance from "../../axios/instance";

import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import Loading from "@/components/Loading";
import Panel from "@/components/Panel";
import Table from "@/components/Table";
import Title from "@/components/Title";

import { useChannelHash } from "../../hooks/useChannelHash";

function SmartContract() {
  const { channelHash } = useChannelHash();

  const { data: contracts, isLoading } = useQuery(
    "available-channels",
    async () => {
      const response = await instance.get(`/chaincode/${channelHash}`);
      return response.data?.chaincode?.map((ch: any) => {
        return {
          name: ch.chaincodename,
          version: ch.codes.length,
          txnCount: ch.codes[0].txcount,
          updated: ch.codes[0].createdt,
        };
      });
    }
  );

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
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
      data: contracts || [],
    },
    useFlexLayout,
    useResizeColumns
  );

  return (
    <Panel>
      <Title>Smart Contracts</Title>
      {isLoading ? (
        <Loading />
      ) : (
        contracts.length && <Table instance={tableInstance} />
      )}
    </Panel>
  );
}

export default SmartContract;
