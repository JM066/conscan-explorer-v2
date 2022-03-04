import Main from "../src/pages/Main";
import { getHash } from "./api/index";

export async function getStaticProps() {
  const channelHash = await getHash();

  return {
    props: {
      channelHash,
    },
  };
}
export default Main;
