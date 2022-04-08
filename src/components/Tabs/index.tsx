import React, { useEffect } from "react";
import useStore from "@/store/store";
import classNames from "classnames";
import HStack from "@/components/HStack";
import Button from "@/components/Button";
import { ObjectType } from "@/types/index";
import styles from "./Tabs.module.scss";

interface Props {
  walletPage: boolean;
  activeTab: string;
  tabs: ObjectType[];
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

function Tabs({ tabs, activeTab, setActiveTab, walletPage }: Props) {
  const isMobile = useStore((state) => state.isMobile);
  const tabsCopy = tabs.slice(isMobile ? 0 : 1);
  useEffect(() => {
    if (walletPage) {
      setActiveTab(isMobile ? "details" : "txns");
    } else {
      setActiveTab(isMobile ? "desc" : "txns");
    }
  }, []);
  return (
    <HStack className={styles.TabContainer}>
      {tabsCopy.map((tab, index) => (
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
