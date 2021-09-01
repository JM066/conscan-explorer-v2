import React, { useMemo } from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import Button from "@/components/Button";
import IdenticonLink from "@/components/IdenticonLink";
import Loading from "@/components/Loading";
import Table from "@/components/Table";
import Title from "@/components/Title";
import TwinPanel from "@/components/TwinPanel";

import useBlockActivityData from "@/hooks/useBlockActivityData";

import { getTimeDistance, reducedHash } from "@/helpers/index";

import styles from "./BlocksActivitySection.module.scss";

interface Block {
  icon: string;
  blocknum: number;
  txcount: number;
  blockhash: string;
  createdt: any;
}
function BlocksActivitySection() {
  const { data: blockactivity, isLoading } = useBlockActivityData();
  const blocks = blockactivity?.map((block: Block) => {
    return {
      icon: block.blocknum.toString(),
      blocknum: block.blocknum,
      txcount: block.txcount,
      blockhash: block.blockhash,
      createdt: getTimeDistance(block.createdt),
    };
  });

  const columns = useMemo(
    () => [
      {
        accessor: "icon",
        hideHeader: true,
        maxWidth: 120,

        Cell: function IconLink({ value }: { value: any }) {
          return <IdenticonLink link="/smart-contracts" idString={value} />;
        },
      },
      {
        accessor: "blocknum",
        hideHeader: true,
        maxWidth: 80,
      },
      {
        accessor: "txcount",
        hideHeader: true,
        maxWidth: 80,
        Cell: function TxCount({ value }: { value: number }) {
          return <div className={styles.TxcountBox}>{value}</div>;
        },
      },
      {
        accessor: "blockhash",
        hideHeader: true,
        Cell: ({ value }: { value: string }) => {
          const hash = reducedHash(value);
          return hash;
        },
      },
      {
        accessor: "createdt",
        hideHeader: true,
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
    <TwinPanel className={styles.TableContainer} isLeft>
      <Title>Recent Blocks</Title>
      {isLoading ? <Loading /> : <Table instance={tableInstance} />}
      <Button>View More Blocks</Button>
    </TwinPanel>
  );
}

export default BlocksActivitySection;
