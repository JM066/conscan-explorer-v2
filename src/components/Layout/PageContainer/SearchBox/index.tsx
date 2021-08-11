import React from "react";

import styles from "./SearchBox.module.scss";

function SearchBox() {
  return (
    <div className={styles.SearchBox}>
      <div className={styles.Title}>
        CONUN <span className={styles.Red}>BLOCKCHAIN</span> EXPLORER
      </div>
      <div className={styles.SearchPlaceholder}></div>
    </div>
  );
}

export default SearchBox;
