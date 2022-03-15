import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Table from "@/components/Table/index";
import styles from "./DuplicatedSkeleton.module.scss";

function DuplicatedSkeleton({ row }: { row: number }) {
  const EmptyRows = Array(row).fill("");
  return (
    <Table className={styles.DuplicatedTable}>
      {EmptyRows.map((row: string, index: number) => (
        <Row key={index} className={styles.Row}>
          <Cell className={styles.Cell}>{row}</Cell>
          <Cell className={styles.Cell} grow>
            {row}
          </Cell>
          <Cell centered={false} className={styles.Cell}>
            {row}
          </Cell>
        </Row>
      ))}
    </Table>
  );
}
export default DuplicatedSkeleton;
