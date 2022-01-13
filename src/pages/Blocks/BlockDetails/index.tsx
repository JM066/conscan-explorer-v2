import React, { useState, useEffect } from "react";
function BlockDetails({ ...props }) {
  const blockInfo = props.data.data;

  const [blockData, setBlockData] = useState<any>([]);

  useEffect(() => {
    setBlockData(blockInfo);
  }, []);

  return (
    <div>
      Blocks Detail page
      <p>{blockData.blocknum}</p>
      <p>{blockData.blockhash}</p>
      <p>{blockData.datahash}</p>
    </div>
  );
}
export default BlockDetails;
