import React, { useState } from "react";

import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
// import Wrapper from "@/components/Table/Wrapper";

import TwinPanel from "@/components/TwinPanel";
import Loading from "@/components/Loading";
// import IdenticonLink from "@/components/IdenticonLink";
import Title from "@/components/Title";
import Button from "@/components/Button";
// import useBlockActivityData from "@/hooks/useBlockActivityData";

// import { getTimeDistance, reducedHash } from "@/helpers/index";

import styles from "./BlocksActivitySection.module.scss";
import { useEffect } from "react";

// interface Block {
//   icon: string;
//   blocknum: number;
//   txcount: number;
//   blockhash: string;
//   createdt: any;
// }

interface Block {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}
function BlocksActivitySection() {
  const [isLoading] = useState(false);
  const [data, setData] = useState<Block[]>();
  // const { data: blockactivity, isLoading } = useBlockActivityData();
  // const blocks = blockactivity?.map((block: Block) => {
  //   return {
  //     icon: block.blocknum.toString(),
  //     blocknum: block.blocknum,
  //     txcount: block.txcount,
  //     blockhash: block.blockhash,
  //     createdt: getTimeDistance(block.createdt),
  //   };
  // });

  // if (!blockactivity) {
  //   return null;
  // }

  // const getBlockActivityData = async () => {
  //   const response = await fetch(
  //     "https://nextjs-project-eb4c9-default-rtdb.firebaseio.com/events.json"
  //   );
  //   const data = await response.json();
  //   return data
  // };

  useEffect(() => {
    fetch(
      "https://nextjs-project-eb4c9-default-rtdb.firebaseio.com/events.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const blocks = [];
        for (const key in data) {
          blocks.push({
            id: key,
            ...data[key],
          });
        }
        setData(blocks);
      });
  }, []);

  return (
    <TwinPanel className={styles.TableContainer} isLeft>
      <Title>Recent Blocks</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <Table>
          <Row header>
            <Cell centered>Cell</Cell>
            <Cell centered grow>
              Cell
            </Cell>
            <Cell centered>Cell</Cell>
          </Row>

          {data?.map((column) => {
            return (
              <Row key={column.id}>
                <Cell>{column.title}</Cell>
                <Cell grow>{column.location}</Cell>
                <Cell centered>{column.date}</Cell>
              </Row>
            );
          })}
        </Table>
      )}
      <Button>View More Blocks</Button>
    </TwinPanel>
  );
}

export default BlocksActivitySection;
