import React from "react";

import styles from "./Panel.module.scss";

function Panel({ children }: { children: React.ReactNode }) {
  return <div className={styles.Panel}>{children}</div>;
}

export default Panel;
