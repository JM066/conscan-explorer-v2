import React from "react";

import styles from "./Panel.module.scss";

interface Panel {
  children: React.ReactNode;
}

function Panel({ children }: Panel) {
  return <div className={styles.Panel}>{children}</div>;
}

export default Panel;
