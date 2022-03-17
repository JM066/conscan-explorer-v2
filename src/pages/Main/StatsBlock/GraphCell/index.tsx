import React from "react";
import { useQuery } from "react-query";
// import { format } from "date-fns-tz";
import instance from "src/axios/instance";
import StatsGraph from "./StatsGraph";

import VStack from "@/components/VStack";

// import { getLocalTime } from "@/helpers/index";

import styles from "./GraphCell.module.scss";

function GraphCell({ channelHash }: { channelHash: string }) {
  const arr = [
    { datetime: "13:15", transactions: 2, blocks: 2 },
    { datetime: "13:16", transactions: 2, blocks: 4 },
    { datetime: "13:17", transactions: 3, blocks: 4 },
    { datetime: "13:18", transactions: 4, blocks: 5 },
    { datetime: "13:19", transactions: 2, blocks: 6 },
    { datetime: "13:20", transactions: 4, blocks: 7 },
    { datetime: "13:21", transactions: 5, blocks: 8 },
    { datetime: "13:15", transactions: 2, blocks: 2 },
    { datetime: "13:16", transactions: 2, blocks: 4 },
    { datetime: "13:17", transactions: 3, blocks: 4 },
    { datetime: "13:18", transactions: 4, blocks: 5 },
    { datetime: "13:19", transactions: 2, blocks: 6 },
    { datetime: "13:20", transactions: 4, blocks: 7 },
    { datetime: "13:21", transactions: 5, blocks: 8 },
    { datetime: "13:15", transactions: 2, blocks: 2 },
    { datetime: "13:16", transactions: 2, blocks: 4 },
    { datetime: "13:17", transactions: 3, blocks: 4 },
    { datetime: "13:18", transactions: 4, blocks: 5 },
    { datetime: "13:19", transactions: 2, blocks: 6 },
    { datetime: "13:20", transactions: 4, blocks: 7 },
    { datetime: "13:21", transactions: 5, blocks: 8 },
    { datetime: "13:15", transactions: 2, blocks: 2 },
    { datetime: "13:16", transactions: 2, blocks: 4 },
  ];

  const { data } = useQuery(
    "graph-data-per-hour",
    async () => {
      const txnData = await instance.get(`/txByHour/${channelHash}/1`);

      return txnData.data.rows.map((row: any, ind: number) => {
        // const time = getLocalTime(row.datetime);
        // const min = format(time, "HH:mm");

        return {
          datetime: arr[ind]?.datetime,
          transactions: arr[ind]?.transactions,
        };

        // return {
        //   datetime: min,
        //   transactions: Number(row.count),
        // };
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
