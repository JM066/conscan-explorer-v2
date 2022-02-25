import Blocks from "../../src/pages/Blocks";
import { getLatestBlocks } from "../api/index";
export default Blocks;

export async function getServerSideProps() {
  const { channelHash, latestBlocks } = await getLatestBlocks();

  return {
    props: {
      channelHash,
      latestBlocks,
    },
  };
}
