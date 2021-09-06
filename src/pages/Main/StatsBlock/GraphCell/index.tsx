import React from "react";
import { useQuery } from "react-query";

import instance from "src/axios/instance";

import TwinPanel from "@/components/TwinPanel";

import { useChannelHash } from "@/hooks/useChannelHash";
import StatsGraph from "./StatsGraph";

function GraphCell() {
  const { channelHash } = useChannelHash();

  const { data } = useQuery(
    "graph-data-per-hour",
    async () => {
      const txnData = await instance.get(`/txByMinute/${channelHash}/1`);
      const blockData = await instance.get(`/blocksByMinute/${channelHash}/1`);

      const out = [];
      for (let i = 0; i < txnData.data.rows.length; i++) {
        out.push({
          datetime: new Date(txnData.data.rows[i].datetime).toLocaleTimeString(
            navigator.language,
            { hour: "2-digit", minute: "2-digit" }
          ),
          txnCount: Number(txnData.data.rows[i].count),
          blockCount: Number(blockData.data.rows[i].count),
        });
      }

      return out;
    },
    { enabled: !!channelHash }
  );

  console.log(`data`, data);

  return (
    <TwinPanel>
      <StatsGraph
        data={data || []}
        width={"95%"}
        minWidth={"50px"}
        height={250}
      />
      <div></div>
    </TwinPanel>
  );
}

export default GraphCell;
