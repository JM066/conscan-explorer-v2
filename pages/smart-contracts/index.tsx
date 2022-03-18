import { getAllcontracts } from "pages/api";
import SmartContracts from "../../src/pages/SmartContracts";

export async function getServerSideProps() {
  const { status, chaincode } = await getAllcontracts();

  return {
    props: { status, chaincode },
  };
}
export default SmartContracts;
