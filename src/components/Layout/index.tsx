import React from "react";
import classNames from "classnames";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmallSpinner from "../SmallSpinner";
import Disconnected from "../Disconnected";
import PageContainer from "./PageContainer";

import useLatestBlocksData from "@/hooks/useChannelHash";
// import useIsMobile from "@/hooks/useIsMobile";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const { channelHash, loadingChannelHash } = useLatestBlocksData();
  // const isMobile = useIsMobile();

  console.log("channelhash", channelHash);
  return (
    <div className={classNames(styles.Layout)}>
      <Navbar />
      <div className={styles.AppWidth}>
        <PageContainer>
          {loadingChannelHash ? (
            <SmallSpinner />
          ) : channelHash ? (
            children
          ) : (
            <Disconnected />
          )}
        </PageContainer>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
