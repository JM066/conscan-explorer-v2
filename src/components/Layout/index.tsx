import React from "react";

import classNames from "classnames";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmallSpinner from "../SmallSpinner";
import Disconnected from "../Disconnected";
import PageContainer from "./PageContainer";

import useLatestBlocksData from "@/hooks/useChannelHash";
import hasMounted from "@/hooks/useHasMounted";
import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const { channelHash, loadingChannelHash } = useLatestBlocksData();
  const isWindow = hasMounted();

  return (
    <div className={classNames(styles.Layout)}>
      {isWindow && <Navbar />}
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
      {isWindow && <Footer />}
    </div>
  );
}

export default Layout;
