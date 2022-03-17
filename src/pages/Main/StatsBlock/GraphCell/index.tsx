import React from "react";
import { useQuery } from "react-query";
import { format } from "date-fns-tz";
import instance from "src/axios/instance";
import StatsGraph from "./StatsGraph";

import VStack from "@/components/VStack";

import { getLocalTime } from "@/helpers/index";

import styles from "./GraphCell.module.scss";

function GraphCell({ channelHash }: { channelHash: string }) {
  const { data } = useQuery(
    "graph-data-per-hour",
    async () => {
      const txnData = await instance.get(`/txByMinute/${channelHash}/1`);
      const blockData = await instance.get(`/blocksByMinute/${channelHash}/1`);

      return txnData.data.rows.map((row: any, ind: number) => {
        const time = getLocalTime(row.datetime);
        const min = format(time, "HH:mm");

        return {
          datetime: min,
          transactions: Number(row.count),
          blocks: Number(blockData.data.rows[ind].count),
        };
      });
    },
    { enabled: !!channelHash }
  );

  return (
    <VStack className={styles.GraphCell}>
      <StatsGraph data={data} width={"95%"} height={250} />
    </VStack>
  );
}

export default GraphCell;
