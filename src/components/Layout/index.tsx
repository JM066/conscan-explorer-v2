import React from "react";
import useStore from "@/store/store";
import classNames from "classnames";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmallSpinner from "../SmallSpinner";
import Disconnected from "../Disconnected";
import PageContainer from "./PageContainer";

import useLatestBlocksData from "@/hooks/useChannelHash";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const { channelHash, loadingChannelHash } = useLatestBlocksData();
  const isMobile = useStore((state) => state.isMobile);
  return (
    <div className={classNames(styles.Layout)}>
      {isMobile ? <Navbar /> : <Navbar />}
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
