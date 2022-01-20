import useLatestBlocksData from "@/hooks/useLatestBlocksData";

import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Panel from "@/components/Panel";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Box from "@/components/Box";
import HashTimeCell from "@/components/Table/HashTimeCell";
import TxnsCell from "@/components/Table/TxnsCell";

import { BlockActivityDataType } from "@/types/index";

import styles from "./BlocksActivitySection.module.scss";

function BlocksActivitySection() {
  const { latestBlocks, isLoading } = useLatestBlocksData();

  return (
    <Panel className={styles.TableContainer}>
      <Box justify="center">
        <Title title="Recent Blocks" />
      </Box>

      {isLoading ? (
        <Loading />
      ) : (
        <Table className={styles.BlocksTable}>
          {latestBlocks?.map((block: BlockActivityDataType, index: number) => {
            return (
              <Row key={index} className={styles.BlocksRow}>
                <Cell centered={true} className={styles.NumberCell}>
                  <a>{block.blocknum}</a>
                </Cell>
                <HashTimeCell
                  hash={block.blockhash}
                  time={block.createdt}
                  index={index}
                  identicon
                  link={`/blocks/${block.blocknum}`}
                />
                <TxnsCell txcount={block.txcount} />
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
