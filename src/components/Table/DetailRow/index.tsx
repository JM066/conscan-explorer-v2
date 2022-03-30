import { useRouter } from "next/router";
import Cell from "@/components/Table/Cell/index";
import Row from "@/components/Table/Row/index";
import HStack from "@/components/HStack/index";
import Button from "@/components/Button";
import styles from "./DetailRow.module.scss";
import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
  path?: string;
}

function DetailRow({ title, path, children }: Props) {
  const route = useRouter();
  return (
    <Row className={styles.RowContainer}>
      <Cell className={styles.Cell}>
        <div className={styles.TitleCell}>
          <HStack className={styles.Title}>
            <div className={styles.TitleBox}>
              <p>{title}</p>
            </div>
            <div className={styles.Partition}>|</div>
          </HStack>
        </div>
        {children && (
          <Button
            variant="ghost"
            onClick={() => path && route.replace(path)}
            className={styles.Description}
          >
            {children}
          </Button>
        )}
      </Cell>
    </Row>
  );
}
export default DetailRow;
