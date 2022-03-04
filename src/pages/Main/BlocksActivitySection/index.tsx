import useLatestActivityData from "@/hooks/useLatestActivityData";

import Table from "@/components/Table";
import BlocksTable from "@/components/Table/BlocksTable";
import VStack from "@/components/VStack";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Box from "@/components/Box";

import { BlockActivityDataType } from "@/types/index";

import styles from "./BlocksActivitySection.module.scss";

function BlocksActivitySection({ channelHash }: { channelHash: string }) {
  const { latestData, isLoading } = useLatestActivityData(
    channelHash,
    "blockActivity"
  );

  return (
    <VStack className={styles.TableContainer}>
      <Box position="center">
        <Title title="Recent Blocks" />
      </Box>

      {isLoading ? (
        <Loading />
      ) : (
        <Table className={styles.BlocksTable}>
          {latestData?.map((block: BlockActivityDataType) => {
            return (
              <BlocksTable
                key={block.blocknum}
                block={block}
                activityId={block.blocknum.toString()}
              />
            );
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
