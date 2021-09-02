import React from "react";
import { useQuery } from "react-query";

import instance from "src/axios/instance";

import Panel from "@/components/Panel";

import { useChannelHash } from "@/hooks/useChannelHash";

import BlocksIcon from "@/assets/icons/blocks-icon.svg";
import TxnIcon from "@/assets/icons/txn-icon.svg";

import styles from "./NetworkStats.module.scss";

function NetworkStats() {
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
    <Panel className={styles.NetworkStats}>
      <div className={styles.Pair}>
        <div className={styles.IconCell}>
          <BlocksIcon className={styles.Icon} />
        </div>
        {data && <div className={styles.Data}>{`${data?.blocks} Blocks`}</div>}
      </div>
      <div className={styles.Pair}>
        <div className={styles.IconCell}>
          <TxnIcon className={styles.Icon} />
        </div>
        {data && <div className={styles.Data}>{`${data?.txns} Txns`}</div>}
      </div>
    </Panel>
  );
}

export default NetworkStats;
