import VStack from "@/components/VStack";
import HStack from "@/components/HStack";
import styles from "./WalletDescription.module.scss";
interface Props {
  title: string;
  value: string;
}
function WalletDescription({ title, value }: Props) {
  return (
    <HStack className={styles.WalletDescriptionContainer}>
      <div className={styles.Partition}>|</div>
      <VStack className={styles.WalletDescription}>
        <div>{title}</div>
        <div>{value}</div>
      </VStack>
    </HStack>
  );
}

export default WalletDescription;
