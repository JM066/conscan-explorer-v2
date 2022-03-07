import React from "react";
import HStack from "@/components/HStack";

import styles from "./ContractDescription.module.scss";

// const DESCRIPTION = {
//   drive:
//     "The drive-type contract is used when users share files or click ‘like’ button using the CONUN Drive service.",
//   conx: "The coin-type contract is used to transfer tokens between users, as trade, or as a reward for using one of the other services.",
//   bridge:
//     "The basic-type contract is used for internal operations, such as creating new contracts in the blockchain network.",
// };
// interface Props {
//   title: string;
//   description: string | React.ReactNode;
// }

// function Section({ title, description }: Props) {
//   return (
//     <HStack>
//       <div>|</div>
//       <div>{title}</div>
//       <div>{description}</div>
//     </HStack>
//   );
// }

function ContractDescription() {
  return <HStack className={styles.Description}>sd</HStack>;
}

export default ContractDescription;
