import BlockDetails from "../../../src/pages/Blocks/BlockDetails";
import { getHash } from "../../api/index";
export default BlockDetails;

export async function getServerSideProps(context: any) {
  const { params } = context;
  console.log("params", params);
  const blockNum = params.blockNum;
  const activeChannelHash = await getHash();
  console.log("active Channel Hash", blockNum, activeChannelHash);
  const block = await fetch(
    `http://192.168.100.208:8080/api/block/transactions/${activeChannelHash}/${blockNum}`
  );

  const blockJSON = await block.json();

  return {
    props: {
      data: blockJSON,
    },
  };
}
