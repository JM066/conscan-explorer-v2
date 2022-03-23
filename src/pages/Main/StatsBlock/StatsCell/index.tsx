import React, { useEffect } from "react";
import useStore from "@/store/store";
import NetworkStats from "./NetworkStat/index";
import VStack from "@/components/VStack";
import HorizontalLine from "@/components/HorizontalLine/inxex";
import useChannelStatistics from "@/hooks/useChannelStatistics";

import ConPrice from "src/assets/icons/con_price.svg";
import MarketCap from "src/assets/icons/market_cap.svg";
import TotalTxn from "src/assets/icons/total_txn.svg";
import BlockIcon from "src/assets/icons/block_icon.svg";
import styles from "./StatsCell.module.scss";

function StatsCell({ channelHash }: { channelHash: string }) {
  const channelStatistics = useChannelStatistics(channelHash);
  const channelStats = useStore((state) => state.setChannelStats);
  const isMobile = useStore((state) => state.isMobile);

  useEffect(() => {
    channelStats(channelStatistics);
  }, [channelStatistics, channelStats]);

  return (
    <div className={styles.Container}>
      {isMobile ? (
        <VStack centered={true}>
          <NetworkStats
            blocks={channelStatistics.txns}
            title={"total transactions".toUpperCase()}
            icon={<TotalTxn />}
            position="bottom"
          />
          <HorizontalLine />
          <NetworkStats
            blocks={channelStatistics.blocks}
            title={"total blocks".toUpperCase()}
            icon={<BlockIcon />}
            position="bottom"
          />
          <HorizontalLine />
          <NetworkStats
            blocks={channelStatistics.blocks}
            title={"con price".toUpperCase()}
            value="0.0000005104 BTC"
            icon={<ConPrice />}
            position="top"
          />
          <HorizontalLine />
          <NetworkStats
            blocks={channelStatistics.txns}
            title={"market cap".toUpperCase()}
            icon={<MarketCap />}
            position="top"
          />
        </VStack>
      ) : (
        <>
          <VStack centered={false}>
            <NetworkStats
              blocks={channelStatistics.blocks}
              title={"con price".toUpperCase()}
              value="0.0000005104 BTC"
              icon={<ConPrice />}
              hasBorder={true}
              position="top"
            />
            <HorizontalLine />
            <NetworkStats
              blocks={channelStatistics.blocks}
              title={"total blocks".toUpperCase()}
              icon={<BlockIcon />}
              hasBorder={true}
              position="bottom"
            />
          </VStack>
          <VStack>
            <NetworkStats
              blocks={channelStatistics.txns}
              title={"market cap".toUpperCase()}
              icon={<MarketCap />}
              position="top"
            />
            <HorizontalLine />
            <NetworkStats
              blocks={channelStatistics.txns}
              title={"total transactions".toUpperCase()}
              icon={<TotalTxn />}
              position="bottom"
            />
          </VStack>
        </>
      )}
    </div>
  );
}

export default StatsCell;
