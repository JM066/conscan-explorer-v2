import Blocks from "../../src/pages/Blocks";
import { getHash, getLatestBlocks } from "../api/index";
export default Blocks;

export async function getStaticProps() {
  const latestBlocks = await getLatestBlocks();
  const channelHash = await getHash();

  return {
    props: {
      channelHash,
      latestBlocks,
    },
  };
}
