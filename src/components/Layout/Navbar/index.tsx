import React from "react";
import Link from "next/link";

import { PAGES_HEADER } from "../../../const";

import ConunLogo from "@/assets/icons/conun-logo-head-bar.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
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
          {PAGES_HEADER.map((nav) => (
            <Link key={nav.id} href={nav.path}>
              <a className={styles.Nav}>{nav.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
