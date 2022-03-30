import StatsCell from "./StatsBlock/StatsCell";
import GraphCell from "./StatsBlock/GraphCell";
import BlocksActivityTable from "./BlocksActivityTable";
import TxnActivitySection from "./TxnActivitySection";
import HStack from "@/components/HStack";

import useWebSocket from "@/hooks/WebSocket";

import styles from "./Main.module.scss";

function Main({ channelHash }: { channelHash: string }) {
  useWebSocket(channelHash);

  return (
    <div className={styles.Container}>
      <HStack className={styles.SubStatsTop}>
        <StatsCell channelHash={channelHash} />
        <GraphCell channelHash={channelHash} />
      </HStack>

      <HStack className={styles.SubStatsBottom}>
        <BlocksActivityTable channelHash={channelHash} />
        <TxnActivitySection channelHash={channelHash} />
      </HStack>
    </div>
  );
}

export default Main;
