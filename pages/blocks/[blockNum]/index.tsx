import BlockDetails from "../../../src/pages/Blocks/BlockDetails";
import { getBlockDetail } from "../../api/index";
export default BlockDetails;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const blockNum = params.blockNum;
  const blockDetail = await getBlockDetail(blockNum);

  return {
    props: {
      data: blockDetail,
    },
  };
}
