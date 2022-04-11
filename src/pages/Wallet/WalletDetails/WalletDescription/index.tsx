import DescriptionCell from "./DescriptionCell";
import HStack from "@/components/HStack";
import { FormatValue } from "@/helpers/index";
import styles from "./WalletDescription.module.scss";

interface Props {
  walletStatus: string;
  loading: boolean;
}
function WalletDescription({ walletStatus, loading }: Props) {
  if (loading) {
    <HStack className={styles.Description}>
      <DescriptionCell title="TOTAL TRANSACTIONS" value={"loading..."} />
      <DescriptionCell title="BALANCE" value={"loading..."} />
      <DescriptionCell title="CONX VALUE" value={"loading..."} />
    </HStack>;
  }
  return (
    <HStack className={styles.Description}>
      <DescriptionCell title="TOTAL TRANSACTIONS" value={walletStatus} />
      <DescriptionCell
        title="BALANCE"
        value={`${FormatValue("500000000")} CONX`}
      />
      <DescriptionCell
        title="CONX VALUE"
        value={`$${FormatValue("500000000")} (0.0000007344 ETH)`}
      />
    </HStack>
  );
}

export default WalletDescription;
