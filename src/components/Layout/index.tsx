import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  return (
    <div className={styles.Layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
