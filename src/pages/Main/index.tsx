import StatsCell from "./StatsBlock/StatsCell";
import GraphCell from "./StatsBlock/GraphCell";
import BlocksActivitySection from "./BlocksActivitySection";
import TxnActivitySection from "./TxnActivitySection";
import HStack from "@/components/HStack";

import useWebSocket from "@/hooks/WebSocket";
// import useIsMobile from "@/hooks/useIsMobile";

import styles from "./Main.module.scss";

function Main({ channelHash }: { channelHash: string }) {
  useWebSocket(channelHash);
  // const isMobile = useIsMobile();

  return (
    <div className={styles.Container}>
      <HStack className={styles.SubStatsTop}>
        <StatsCell channelHash={channelHash} />
        <GraphCell channelHash={channelHash} />
      </HStack>
      <HStack className={styles.SubStatsBottom}>
        <BlocksActivitySection channelHash={channelHash} />
        <TxnActivitySection channelHash={channelHash} />
      </HStack>
    </div>
  );
}

export default Main;
