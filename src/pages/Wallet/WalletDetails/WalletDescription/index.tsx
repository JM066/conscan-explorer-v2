import styles from "./WalletDescription.module.scss";
interface Props {
  title: string;
  value: string;
}
function WalletDescription({ title, value }: Props) {
  return (
    <div className={styles.WalletDescription}>
      <div>
        <span>|</span>
        {title}
      </div>
      <div>{value}</div>
    </div>
  );
}

export default WalletDescription;
