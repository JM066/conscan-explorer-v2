import useLatestBlocksData from "@/hooks/useLatestBlocksData";

import Table from "@/components/Table";
import BlocksTable from "@/components/Table/BlocksTable";
import VStack from "@/components/VStack";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Box from "@/components/Box";

import { BlockActivityDataType } from "@/types/index";

import styles from "./BlocksActivitySection.module.scss";

function BlocksActivitySection() {
  const { latestBlocks, isLoading } = useLatestBlocksData();

  return (
    <VStack className={styles.TableContainer}>
      <Box position="center">
        <Title title="Recent Blocks" />
      </Box>

      {isLoading ? (
        <Loading />
      ) : (
        <Table className={styles.BlocksTable}>
          {latestBlocks?.map((block: BlockActivityDataType, index: number) => {
            return <BlocksTable key={index} block={block} index={index} />;
          })}
        </Table>
      )}
      <div className={styles.ViewBlocks}>
        <Button link={"/blocks/"}>View More Blocks</Button>
      </div>
    </VStack>
  );
}

export default BlocksActivitySection;
