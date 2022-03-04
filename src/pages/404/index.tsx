import React from "react";
import VStack from "@/components/VStack";
import NotFoundIcon from "@/assets/icons/404-error.svg";
import styles from "./404.module.scss";

function PageNotFound() {
  return (
    <VStack centered className={styles.VStack}>
      <NotFoundIcon className={styles.Icon} />
      <div className={styles.Message}>
        Couldn&apos;t find the page you&apos;re looking for :(
      </div>
    </VStack>
  );
}

export default PageNotFound;
