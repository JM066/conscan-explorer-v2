import React, { useEffect } from "react";
import useStore from "@/store/store";
// import instance from "src/axios/instance";
// import { useQuery } from "react-query";
import NetworkStats from "./NetworkStat/index";
import VStack from "@/components/VStack";
import useChannelStatistics from "@/hooks/useChannelStatistics";

import ConPrice from "src/assets/icons/con_price.svg";
import MarketCap from "src/assets/icons/market_cap.svg";
import TotalTxn from "src/assets/icons/total_txn.svg";
import BlockIcon from "src/assets/icons/block_icon.svg";
import styles from "./StatsCell.module.scss";

function StatsCell({ channelHash }: { channelHash: string }) {
  const channelStatistics = useChannelStatistics(channelHash);
  const channelStats = useStore((store) => store.setChannelStats);

  useEffect(() => {
    channelStats(channelStatistics);
  }, [channelStatistics, channelStats]);

  return (
    <div className={styles.Container}>
      <VStack bordered={false} centered={false}>
        <NetworkStats
          blocks={channelStatistics.blocks}
          title={"con price".toUpperCase()}
          value="0.0000005104 BTC"
          icon={<ConPrice />}
          hasBorder={true}
          position="top"
        />
        <div className={styles.HorizontalLine}>
          <hr className={styles.Line}></hr>
        </div>
        <NetworkStats
          blocks={channelStatistics.blocks}
          title={"total blocks".toUpperCase()}
          icon={<BlockIcon />}
          hasBorder={true}
          position="bottom"
        />
      </VStack>

      <VStack bordered={false}>
        <NetworkStats
          blocks={channelStatistics.txns}
          title={"market cap".toUpperCase()}
          icon={<MarketCap />}
          hasBorder={false}
          position="top"
        />
        <div className={styles.HorizontalLine}>
          <hr className={styles.Line}></hr>
        </div>
        <NetworkStats
          blocks={channelStatistics.txns}
          title={"total transactions".toUpperCase()}
          icon={<TotalTxn />}
          hasBorder={false}
          position="bottom"
        />
      </VStack>
    </div>
  );
}

export default StatsCell;
