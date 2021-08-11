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
      path: "/smart",
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
    <div className={styles.Navbar}>
      <Link href="/#home">
        <a>
          <ConunLogo className={classNames(styles.ConunLogo)} />
        </a>
      </Link>
      {PAGES.map((nav) => {
        return (
          <a
            key={nav.id}
            href={nav.path}
            className={classNames(styles.Nav)}
            target="_blank"
            rel="noreferrer"
          >
            {nav.name}
          </a>
        );
      })}
    </div>
  );
}

export default Navbar;
