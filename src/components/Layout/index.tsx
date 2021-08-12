import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import PageContainer from "./PageContainer";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
}

export default Layout;
