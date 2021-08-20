import React, { useMemo } from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";

import Table from "@/components/Table";
import Panel from "@/components/Panel";
import Loading from "@/components/Loading";
import IdenticonLink from "@/components/IdenticonLink";
import Title from "@/components/Title";

import useBlockActivityData from "@/hooks/useBlockActivityData";

import { getDistance } from "@/helpers/getDistance";
import { reducedHash } from "@/helpers/hashDisplay";

import styles from "./BlocksActivitySection.module.scss";

interface Block {
  icon: string;
  blocknum: number;
  txcount: number;
  blockhash: string;
  createdt: any;
}
function BlocksActivitySection() {
  const { data: blockactivity, isLoading } =
    useBlockActivityData("blockActivity");
  const blocks = blockactivity?.map((block: Block) => {
    return {
      icon: block.blocknum.toString(),
      blocknum: block.blocknum,
      txcount: block.txcount,
      blockhash: block.blockhash,
      createdt: getDistance(block.createdt),
    };
  });

  const columns = useMemo(
    () => [
      {
        accessor: "icon",
        hideHeader: true,

        Cell: function IconLink({ value }: { value: any }) {
          return (
            <div className={styles.IconBox}>
              <IdenticonLink link="/smart-contracts" blocknum={value} />
            </div>
          );
        },
      },
      {
        accessor: "blocknum",
        hideHeader: true,
      },
      {
        accessor: "txcount",
        hideHeader: true,
        maxWidth: 100,
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
    <Panel className={styles.TableContainer}>
      <Title>Recent Blocks</Title>
      {isLoading ? <Loading /> : <Table instance={tableInstance} />}
    </Panel>
  );
}

export default BlocksActivitySection;
