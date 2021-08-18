import React, { useMemo } from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import Table from "@/components/Table";
import Panel from "@/components/Panel";
import Loading from "@/components/Loading";
import IdenticonLink from "@/components/IdenticonLink";
import useBlockActivityData from "@/hooks/useBlockActivityData";

interface Block {
  blocknum: number;
  txcount: number;
  blockhash: string;
  createdt: string;
}
function BlocksActivitySection() {
  const { data: blockactivity, isLoading } = useBlockActivityData();

  const blocks = blockactivity?.map((block: Block) => {
    return {
      icon: (
        <IdenticonLink
          link="/smart-contracts"
          blocknum={block.blocknum.toString()}
        />
      ),
      blocknum: block.blocknum,
      txcount: block.txcount,
      blockhash: block.blockhash,
      createdt: new Date(block.createdt).toDateString(),
    };
  });

  const columns = useMemo(
    () => [
      { accessor: "icon" },
      {
        accessor: "blocknum",
      },
      {
        accessor: "txcount",
        maxWidth: 80,
      },
      {
        accessor: "blockhash",
      },
      {
        accessor: "createdt",
        // accessor: (row: any) => new Date(row.createdt).toDateString(),
      },
    ],
    []
  );
  const tableInstance = useTable(
    { columns, data: blocks || [] },
    useFlexLayout,
    useResizeColumns
  );

  if (!blockactivity) {
    return null;
  }

  return (
    <Panel>
      {isLoading ? <Loading /> : <Table instance={tableInstance} />}
    </Panel>
  );
}

export default BlocksActivitySection;
