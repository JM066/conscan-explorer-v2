import { getAllcontracts } from "pages/api";

import Drive from "../../../src/pages/SmartContracts/Drive";

export async function getServerSideProps() {
  const contracts = await getAllcontracts();

  return {
    props: { contracts },
  };
}

export default Drive;
