import React from "react";
import Panel from "@/components/Panel";
import NotFoundIcon from "@/assets/icons/404-error.svg";
import styles from "./404.module.scss";

function PageNotFound() {
  return (
    <Panel centered className={styles.Panel}>
      <NotFoundIcon className={styles.Icon} />
      <div className={styles.Message}>
        Couldn&apos;t find the page you&apos;re looking for :(
      </div>
    </Panel>
  );
}

export default PageNotFound;
