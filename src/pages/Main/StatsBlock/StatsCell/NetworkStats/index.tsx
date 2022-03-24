import Hstack from "@/components/HStack/index";
import styles from "./NetworkStats.module.scss";
type StatType = {
  blocks: string;
  title: string;
  value?: string;
  icon: React.ReactNode;
};
function NetworkStats({ icon, title, blocks, value }: StatType) {
  return (
    <Hstack className={styles.CenterBox}>
      <div className={styles.StatIcon}>{icon}</div>
      <div className={styles.StatDataContainer}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Numbers}>{blocks}</div>
        <div className={styles.CoinVal}>{value}</div>
      </div>
    </Hstack>
  );
}
export default NetworkStats;
