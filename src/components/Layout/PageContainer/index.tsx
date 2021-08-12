import React from "react";

import SearchBox from "./SearchBox";

import styles from "./PageContainer.module.scss";

interface PageCont {
  children: React.ReactNode;
}

function PageContainer({ children }: PageCont) {
  return (
    <div className={styles.PageContainer}>
      <SearchBox />
      {children}
    </div>
  );
}

export default PageContainer;
