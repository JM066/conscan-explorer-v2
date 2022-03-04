import VStack from "@/components/VStack";
import Box from "@/components/Box";
import Table from "@/components/Table";
import Row from "@/components/Table/Row";
import Title from "@/components/Title";

import styles from "./SmartContracts.module.scss";

function SmartContract() {
  return (
    <VStack className={styles.SmartContactContainer}>
      <Box position="center" bottomLine={false} className={styles.Header}>
        <Title title="Recent Blocks" bolded={false} />
      </Box>
      <Table>
        <Row>Drive/Conx/Bridge</Row>
      </Table>
    </VStack>
  );
}

export default SmartContract;
