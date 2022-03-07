import React from "react";
import VStack from "@/components/VStack";
import Box from "@/components/Box";
import Title from "@/components/Title";
import styles from "./Drive.module.scss";
import ContractDetails from "../ContractDetails/index";

function Drive() {
  return (
    <VStack className={styles.DrivePage}>
      <Box position="start">
        <Title title="Drive" bolded={false} />
      </Box>
      <ContractDetails />
    </VStack>
  );
}
export default Drive;
