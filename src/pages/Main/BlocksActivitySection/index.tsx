import React, { useState, useEffect } from "react";

import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Panel from "@/components/Panel";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Box from "@/components/Box";

import styles from "./BlocksActivitySection.module.scss";

interface Block {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}
function BlocksActivitySection(props: any) {
  const activeChannelHash = props.channelHash;
  const [isLoading] = useState(false);
  const [data, setData] = useState<Block[]>();

  useEffect(() => {
    console.log("activeChannelHash", activeChannelHash);
  }, []);

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
    <Panel className={styles.TableContainer}>
      <Box justify="center">
        <Title title="Recent Blocks" />
      </Box>

      {isLoading ? (
        <Loading />
      ) : (
        <Table>
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
      <div className={styles.ViewBlocks}>
        <Button link={"/blocks/"}>View More Blocks</Button>
      </div>
    </Panel>
  );
}

export default BlocksActivitySection;
