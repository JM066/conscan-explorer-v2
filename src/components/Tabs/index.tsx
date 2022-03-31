import React, { useEffect } from "react";
import useStore from "@/store/store";
import classNames from "classnames";
import HStack from "@/components/HStack";
import Button from "@/components/Button";

import styles from "./Tabs.module.scss";

const TABSARR = [
  { tabId: "desc", label: "DESCRIPTION" },
  { tabId: "txns", label: "TRANSACTIONS" },
  { tabId: "code", label: "CODE" },
];

interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

function Tabs({ activeTab, setActiveTab }: Props) {
  const isMobile = useStore((state) => state.isMobile);
  const tabs = TABSARR.slice(isMobile ? 0 : 1);
  useEffect(() => {
    setActiveTab(isMobile ? "desc" : "txns");
  }, []);
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
