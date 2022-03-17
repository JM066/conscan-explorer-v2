import { getAllcontracts } from "pages/api";
import SmartContracts from "../../src/pages/SmartContracts";

export async function getServerSideProps() {
  const contracts = await getAllcontracts();

  return {
    props: { contracts },
  };
}
export default SmartContracts;
