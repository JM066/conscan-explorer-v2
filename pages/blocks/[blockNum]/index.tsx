import BlockDetails from "../../../src/pages/Blocks/BlockDetails";

import { getHash } from "../../api/index";

export default BlockDetails;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const blockNum = params.blockNum;
  const channelHash = await getHash();

  return {
    props: {
      blockNum,
      channelHash,
    },
  };
}
