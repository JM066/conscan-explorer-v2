import React from "react";
import { useQuery } from "react-query";

import instance from "src/axios/instance";

import TwinPanel from "@/components/TwinPanel";
import StatsGraph from "./StatsGraph";

import useChannelHash from "@/hooks/useChannelHash";

import styles from "./GraphCell.module.scss";

function GraphCell() {
  const { channelHash } = useChannelHash();

  const { data } = useQuery(
    "graph-data-per-hour",
    async () => {
      const txnData = await instance.get(`/txByMinute/${channelHash}/1`);
      const blockData = await instance.get(`/blocksByMinute/${channelHash}/1`);

      return txnData.data.rows.map((row: any, ind: number) => {
        return {
          datetime: new Date(row.datetime).toLocaleTimeString(
            navigator.language,
            { hour: "2-digit", minute: "2-digit" }
          ),
          transactions: Number(row.count),
          blocks: Number(blockData.data.rows[ind].count),
        };
      });
    },
    { enabled: !!channelHash }
  );

  return (
    <TwinPanel className={styles.GraphCell}>
      <StatsGraph
        data={data || []}
        width={"95%"}
        minWidth={"50px"}
        height={250}
      />
    </TwinPanel>
  );
}

export default GraphCell;
