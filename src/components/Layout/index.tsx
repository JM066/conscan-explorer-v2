import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import PageContainer from "./PageContainer";

import { useChannelHash } from "@/hooks/useChannelHash";

import Loading from "../Loading";
import Disconnected from "../Disconnected";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const { channelHash, loadingChannelHash } = useChannelHash();

  return (
    <div className={styles.Layout}>
      <Navbar />
      <PageContainer>
        {loadingChannelHash ? (
          <Loading />
        ) : channelHash ? (
          children
        ) : (
          <Disconnected />
        )}
      </PageContainer>
      <Footer />
    </div>
  );
}

export default Layout;
