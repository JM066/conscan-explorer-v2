import Blocks from "../../src/pages/Blocks";
import { getHash, getLatestBlocks } from "../api/index";
export default Blocks;

export async function getStaticProps() {
  const latestBlocks = await getLatestBlocks();
  const channelHash = await getHash();

  // const latestBlocks = await fetch(
  //   `http://192.168.100.208:8080/api/blockActivity/${channelHash}?blocknum=${20}`
  // );

  return {
    props: {
      channelHash: channelHash,
      latestBlocks: latestBlocks,
    },
    revalidate: 3,
  };
}
