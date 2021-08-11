import React from "react";

import Button from "@/components/Button";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.Container}>
      <h1>Welcome</h1>
      <Button>Click Me</Button>
    </div>
  );
}

export default Home;
