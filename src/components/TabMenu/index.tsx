import React from "react";

import classNames from "classnames";

import styles from "./TabMenu.module.scss";
import Button from "../Button";

interface Props {}

function TabMenu({}: Props) {
  return (
    <div className={styles.TabMenu}>
      <Button nostyle className={classNames(styles.Tab, styles.active)}>
        Transactions
      </Button>
      <Button nostyle className={styles.Tab}>
        Code
      </Button>
    </div>
  );
}

export default TabMenu;
