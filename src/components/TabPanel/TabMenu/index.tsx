import React from "react";
import classNames from "classnames";

import Button from "@/components/Button";

import styles from "./TabMenu.module.scss";

interface Props {
  tabTitles: string[];
  activeTab: string;
  changeTab: (_: string) => void;
}

function TabMenu({ tabTitles, activeTab, changeTab }: Props) {
  return (
    <div className={styles.TabMenu}>
      {tabTitles.map((t) => (
        <Button
          key={t}
          onClick={() => changeTab(t)}
          nostyle
          className={classNames(styles.Tab, {
            [styles.active]: t === activeTab,
          })}
        >
          {t}
        </Button>
      ))}
    </div>
  );
}

export default TabMenu;
