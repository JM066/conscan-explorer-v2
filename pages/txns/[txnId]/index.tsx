import TransactionDetails from "../../../src/pages/Txns/TransactionDetails";
import { getHash } from "../../api/index";

export default TransactionDetails;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const txnHash = params.txnId;
  const channelHash = await getHash();

  return {
    props: {
      txnHash,
      channelHash,
    },
  };
}
