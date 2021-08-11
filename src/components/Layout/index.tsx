import React from "react";

import Navbar from "./Navbar";

import styles from "./Layout.module.scss";
import Footer from "./Footer";

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
