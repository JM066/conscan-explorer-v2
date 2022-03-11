import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Table from "@/components/Table/index";
import styles from "./DuplicatedSkeleton.module.scss";

function DuplicatedSkeleton({ row }: { row: number }) {
  const EmptyRows = Array(row).fill("");
  return (
    <Table className={styles.DuplicatedTable}>
      {EmptyRows.map((index: number) => (
        <Row key={index} className={styles.Row}>
          <Cell className={styles.Cell}></Cell>
          <Cell className={styles.Cell} grow></Cell>
          <Cell centered={false} className={styles.Cell}></Cell>
        </Row>
      ))}
    </Table>
  );
}
export default DuplicatedSkeleton;
