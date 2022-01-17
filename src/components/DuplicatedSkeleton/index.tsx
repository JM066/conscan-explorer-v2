import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import Wrapper from "../Table/Wrapper";

import styles from "./DuplicatedSkeleton.module.scss";

function DuplicatedSkeleton() {
  return (
    <Row className={styles.Row}>
      <Cell className={styles.Cell}></Cell>
      <Cell className={styles.Cell} grow>
        <Wrapper className={styles.Wrapper}></Wrapper>
      </Cell>
      <Cell centered={false} className={styles.Cell}>
        <Wrapper className={styles.Wrapper}></Wrapper>
      </Cell>
    </Row>
  );
}
export default DuplicatedSkeleton;
