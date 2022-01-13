import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button";
function Blocks({ ...props }) {
  const data = props.latestBlocks.row;

  const channelHash = props.channelHash;
  const [blockData, setBlockData] = useState<any>(data);

  useEffect(() => {
    setBlockData(data);
  }, []);

  const getNextPage = async () => {
    const pageNum = blockData[0].blocknum - 10;
    console.log("pageNum", pageNum);
    if (pageNum >= 0) {
      const nextPageBlocks = await fetch(
        `http://192.168.100.208:8080/api/blockActivity/${channelHash}?blocknum=${pageNum}`
      );
      const nextPageData = await nextPageBlocks.json();

      setBlockData(nextPageData.row);
    }
  };

  return (
    <div>
      <Button onClick={getNextPage}>Next</Button>
      {blockData.map((block: any) => {
        return (
          <div key={block.createdt}>
            <Link href={`/blocks/${block.blocknum}`}>
              <a>{block.blocknum}</a>
            </Link>
            <p>{block.blockhash}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Blocks;
