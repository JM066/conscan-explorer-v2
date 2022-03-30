import React, { useEffect } from "react";
import useStore from "@/store/store";
import SectionBlock from "@/components/SectionBlock";
import NetworkStats from "./NetworkStats/index";
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
          <SectionBlock position="bottom">
            <NetworkStats
              blocks={channelStatistics.txns}
              title={"total transactions".toUpperCase()}
              icon={<TotalTxn />}
            />
          </SectionBlock>

          <HorizontalLine />
          <SectionBlock position="bottom">
            <NetworkStats
              blocks={channelStatistics.blocks}
              title={"total blocks".toUpperCase()}
              icon={<BlockIcon />}
            />
          </SectionBlock>

          <HorizontalLine />
          <SectionBlock position="top">
            <NetworkStats
              blocks={channelStatistics.blocks}
              title={"con price".toUpperCase()}
              value="0.0000005104 BTC"
              icon={<ConPrice />}
            />
          </SectionBlock>

          <HorizontalLine />
          <SectionBlock position="top">
            <NetworkStats
              blocks={channelStatistics.txns}
              title={"market cap".toUpperCase()}
              icon={<MarketCap />}
            />
          </SectionBlock>
        </VStack>
      ) : (
        <>
          <VStack centered={false}>
            <SectionBlock hasBorder={true} position="top">
              <NetworkStats
                blocks={channelStatistics.blocks}
                title={"con price".toUpperCase()}
                value="0.0000005104 BTC"
                icon={<ConPrice />}
              />
            </SectionBlock>

            <HorizontalLine />
            <SectionBlock hasBorder={true} position="bottom">
              <NetworkStats
                blocks={channelStatistics.blocks}
                title={"total blocks".toUpperCase()}
                icon={<BlockIcon />}
              />
            </SectionBlock>
          </VStack>
          <VStack>
            <SectionBlock position="top">
              <NetworkStats
                blocks={channelStatistics.txns}
                title={"market cap".toUpperCase()}
                icon={<MarketCap />}
              />
            </SectionBlock>

            <HorizontalLine />
            <SectionBlock position="bottom">
              <NetworkStats
                blocks={channelStatistics.txns}
                title={"total transactions".toUpperCase()}
                icon={<TotalTxn />}
              />
            </SectionBlock>
          </VStack>
        </>
      )}
    </div>
  );
}

export default StatsCell;
