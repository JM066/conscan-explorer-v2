import Vstack from "@/components/VStack/index";
import Button from "@/components/Button";
import TimeStamp from "@/components/TimeStamp";
import IdenticonLink from "@/components/IdenticonLink";

import TxnsCell from "@/components/Table/TxnsCell";
import { getReducedHash } from "@/helpers/index";
import { BlockActivityDataType } from "@/types/index";

function BlockActivitySection({
  block,
  activityId,
}: {
  block: BlockActivityDataType;
  activityId: string;
}) {
  return (
    <Vstack>
      <Button variant="ghost" link={`/blocks/${block.blocknum}`}>
        <p>{block.blocknum}</p>
      </Button>
      <TimeStamp time={block.createdt} />
      <IdenticonLink idString={activityId} link={`/blocks/${block.blocknum}`} />
      <p>{getReducedHash(block.blockhash, 6, 4)}</p>
      <TxnsCell noWrap={true} txcount={block.txcount} />
    </Vstack>
  );
}
export default BlockActivitySection;
