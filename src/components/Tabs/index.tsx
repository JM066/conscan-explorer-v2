import React from "react";
import classNames from "classnames";
import HStack from "@/components/HStack";
import Button from "@/components/Button";
import { ObjectType } from "@/types/index";
import styles from "./Tabs.module.scss";

interface Props {
  tabs: Array<ObjectType>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

function Tabs({ tabs, activeTab, setActiveTab }: Props) {
  return (
    <HStack className={styles.TabContainer}>
      {tabs.map((tab, index) => (
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
