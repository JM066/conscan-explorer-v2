import Cell from "@/components/Table/Cell/index";
import Row from "@/components/Table/Row/index";
import HStack from "@/components/HStack/index";

import styles from "./DetailRow.module.scss";

interface Props {
  title: string;
  value: string | number;
}

function DetailRow({ title, value }: Props) {
  return (
    <Row className={styles.RowContainer} fullLength={true}>
      <Cell className={styles.Cell}>
        <div className={styles.TitleCell}>
          <HStack className={styles.Title}>
            <p>{title}</p>
            <p className={styles.Partition}>|</p>
          </HStack>
        </div>
        <p className={styles.Value}>{value}</p>
      </Cell>
    </Row>
  );
}
export default DetailRow;
