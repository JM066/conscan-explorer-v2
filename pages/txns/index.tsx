import Txns from "../../src/pages/Txns";
import { getHash, getLatestTxns } from "../api/index";
export default Txns;

export async function getStaticProps() {
  const latestTxns = await getLatestTxns();
  const channelHash = await getHash();

  return {
    props: {
      latestTxns,
      channelHash,
    },
  };
}
