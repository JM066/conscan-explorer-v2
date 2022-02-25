import React from "react";
import { BlockActivityDataType } from "@/types/index";
function BlockDetails({
  blocknum,
  txcount,
  blockhash,
  createdt,
}: BlockActivityDataType) {
  return (
    <div>
      Blocks Detail page
      <p>{blocknum}</p>
      <p>{blockhash}</p>
      <p>{txcount}</p>
      <p>{createdt}</p>
    </div>
  );
}
export default BlockDetails;
