import React, { useState } from "react";
import TabMenu from "./TabMenu";
import { StringKeyObject } from "src/types";

interface Props {
  tabs: StringKeyObject;
}

function TabbedSection({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState("Transactions");

  return (
    <>
      <TabMenu
        tabTitles={Object.keys(tabs)}
        activeTab={activeTab}
        changeTab={setActiveTab}
      />
      {tabs[activeTab]}
    </>
  );
}

export default TabbedSection;
