import React from "react";
import instance from "src/axios/instance";
import { useQuery } from "react-query";
import NetworkStats from "./NetworkStat/index";
import VStack from "@/components/VStack";
import useChannelHash from "@/hooks/useChannelHash";
import ConPrice from "src/assets/icons/con_price.svg";
import MarketCap from "src/assets/icons/market_cap.svg";
import TotalTxn from "src/assets/icons/total_txn.svg";
import BlockIcon from "src/assets/icons/block_icon.svg";
import styles from "./StatsCell.module.scss";

function StatsCell() {
  const { channelHash } = useChannelHash();

  const { data } = useQuery(
    "channel-statistics",
    async () => {
      const response = await instance.get(`/status/${channelHash}`);
      return {
        blocks: response?.data?.latestBlock,
        txns: response?.data?.txCount,
      };
    },
    { enabled: !!channelHash }
  );

  return (
    <div className={styles.Container}>
      <VStack bordered={false} centered={false}>
        <NetworkStats
          blocks={data?.blocks}
          title="con price"
          value="0.0000005104 BTC"
          icon={<ConPrice />}
          borderVariant="left"
        />
        <NetworkStats
          blocks={data?.blocks}
          title="total blocks"
          icon={<BlockIcon />}
        />
      </VStack>

      <VStack bordered={false}>
        <NetworkStats
          blocks={data?.txns}
          title="market cap"
          icon={<MarketCap />}
        />
        <NetworkStats
          blocks={data?.txns}
          title="total transactions"
          icon={<TotalTxn />}
        />
      </VStack>
    </div>
  );
}

export default StatsCell;
