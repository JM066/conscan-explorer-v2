import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Wrapper from "@/components/Table/Wrapper";
import Panel from "@/components/Panel";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Box from "@/components/Box";

import useLatestBlocksData from "@/hooks/useLatestBlocksData";

import { BlockActivityDataType } from "@/types/index";
import IdenticonLink from "@/components/IdenticonLink";
import TimeStamp from "@/components/TimeStamp";
import TransactionIcon from "@/assets/icons/transaction.svg";

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
                  {block.blocknum}
                </Cell>
                <Cell grow className={styles.HashCell}>
                  <IdenticonLink
                    idString={index.toString()}
                    link={`/blocks/${block.blocknum}`}
                  />
                  <Wrapper className={styles.Wrapper}>
                    <p>{block.blockhash}</p>
                    <TimeStamp className={styles.Time} time={block.createdt} />
                  </Wrapper>
                </Cell>

                <Cell className={styles.CellWithIcon}>
                  <Button link={"txns"}>
                    <TransactionIcon className={styles.TransactionIcon} />
                  </Button>

                  {block.txcount > 1 ? (
                    <Wrapper className={styles.Wrapper}>
                      <p>{block.txcount}</p>
                      <p>Transactions</p>
                    </Wrapper>
                  ) : (
                    <Wrapper className={styles.Wrapper}>
                      <p>{block.txcount}</p>
                      <p>Transaction</p>
                    </Wrapper>
                  )}
                </Cell>
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
