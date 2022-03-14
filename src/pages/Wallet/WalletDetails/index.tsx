// import WalletDescription from "./WalletDescription";
import VStack from "@/components/VStack";
import Box from "@/components/Box";

import styles from "./WalletDetails.module.scss";

interface Props {
  txnsList: string;
  walletAddress: string;
}
function WalletDetails({ txnsList, walletAddress }: Props) {
  console.log("wallet Id", txnsList, walletAddress);

  return (
    <div className={styles.WalletPage}>
      <Box
        className={styles.TitleBox}
        bottomLine={false}
        goBackButton
        title="Wallet Details"
      />

      <VStack bordered={false} className={styles.TableContainer}>
        <div>
          WALLET ADDRESS <span>{walletAddress}</span>
        </div>
        {/* <WalletDescription title="TOTAL TRANSACTIONS"/> */}
      </VStack>
    </div>
  );
}

export default WalletDetails;
