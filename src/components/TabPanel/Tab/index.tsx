import React from "react";

interface Props {
  tabName: string;
  children: React.ReactNode;
}

function Tab({ children }: Props) {
  return <>{children}</>;
}

export default Tab;
