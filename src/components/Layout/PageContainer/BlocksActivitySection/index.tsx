import React, { useState } from "react";

import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Wrapper from "@/components/Table/Wrapper";
import Panel from "@/components/Panel";
import Loading from "@/components/Loading";
// import IdenticonLink from "@/components/IdenticonLink";
import Title from "@/components/Title";
import Button from "@/components/Button";
// import useBlockActivityData from "@/hooks/useBlockActivityData";

// import { getTimeDistance, reducedHash } from "@/helpers/index";

import styles from "./BlocksActivitySection.module.scss";

// interface Block {
//   icon: string;
//   blocknum: number;
//   txcount: number;
//   blockhash: string;
//   createdt: any;
// }
function BlocksActivitySection() {
  const [isLoading] = useState(false);
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

  return (
    <Panel className={styles.TableContainer}>
      <Title>Recent Blocks</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <Table>
          <Row header>
            <Cell>Cell</Cell>
            <Cell grow>Cell</Cell>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Wrapper>
              <Cell>Cell</Cell>
              <Cell>Cell</Cell>
            </Wrapper>

            <Cell grow>Cell</Cell>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
            <Cell grow>Cell</Cell>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
            <Cell grow>Cell</Cell>
            <Cell>Cell</Cell>
          </Row>
        </Table>
      )}
      <Button>View More Blocks</Button>
    </Panel>
  );
}

export default BlocksActivitySection;
