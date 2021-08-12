import React from "react";
import Link from "next/link";
import classNames from "classnames";

import ConunLogo from "@/assets/icons/conun-logo-head-bar.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
  const PAGES = [
    {
      id: "main",
      name: "Main",
      path: "/main",
      show: true,
    },
    {
      id: "smart-contract",
      name: "Smart Contract",
      path: "/smart-contract",
      show: true,
    },
    {
      id: "docs",
      name: "Docs",
      path: "/docs",
      show: true,
    },
  ];
  return (
    <div className={styles.Header}>
      <div className={styles.Navbar}>
        <div className={styles.Logo}>
          <Link href="/">
            <a>
              <ConunLogo />
            </a>
          </Link>
        </div>
        <div className={styles.Navs}>
          {PAGES.map((nav) => {
            return (
              <Link key={nav.id} href={nav.path}>
                <a className={classNames(styles.Nav)}>{nav.name}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
