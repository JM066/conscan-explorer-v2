import React, { useState, Children } from "react";
import TabMenu from "./TabMenu";

interface Props {
  defaultTab: string;
  children: React.ReactNode;
}

function TabPanel({ defaultTab, children }: Props) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const childrenArray = Children.toArray(children);

  if (children && childrenArray.length > 1) {
    const tabNames = childrenArray.map((child: any) => child?.props?.tabName);
    return (
      <>
        <TabMenu
          tabTitles={tabNames}
          activeTab={activeTab}
          changeTab={setActiveTab}
        />
        <>
          {childrenArray.find(
            (child: any) => child.props.tabName === activeTab
          )}
        </>
      </>
    );
  }
  return <>{children}</>;
}

export default TabPanel;
