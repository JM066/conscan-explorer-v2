import Txns from "../../src/pages/Txns";
import { getLatestTxns } from "../api/index";
export default Txns;

export async function getStaticProps() {
  const { channelHash, latestTxns } = await getLatestTxns();

  return {
    props: {
      latestTxns,
      channelHash,
    },
  };
}
