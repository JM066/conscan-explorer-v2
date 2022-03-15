import React from "react";
import classNames from "classnames";
import HStack from "@/components/HStack";
import Button from "@/components/Button";

import styles from "./Tabs.module.scss";

const TABSARR = [
  { tabId: "txns", label: "TRANSACTIONS" },
  { tabId: "code", label: "CODE" },
];

interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

function Tabs({ activeTab, setActiveTab }: Props) {
  return (
    <HStack className={styles.TabContainer}>
      {TABSARR.map((tab, index) => (
        <Button
          variant="ghost"
          key={index}
          className={classNames(styles.Tab, {
            [styles.selected]: activeTab === tab.tabId,
          })}
          onClick={() => setActiveTab(tab.tabId)}
        >
          {tab.label}
        </Button>
      ))}
    </HStack>
  );
}
export default Tabs;
