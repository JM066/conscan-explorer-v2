import WalletDetails from "../../../src/pages/Wallet/WalletDetails";
import { getTxnsListTable } from "pages/api";

export async function getServerSideProps(context: any) {
  const { params } = context;
  const walletAddress = params.walletId;
  const { txnsList } = await getTxnsListTable("userActivity", walletAddress);
  return {
    props: { txnsList, walletAddress },
  };
}
export default WalletDetails;
