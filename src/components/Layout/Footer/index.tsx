import React from "react";
import Link from "next/link";

import { PAGES_FOOTER } from "../../../const";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      {PAGES_FOOTER.map((logo) => (
        <Link key={logo.id} href={logo.path}>
          <a>{logo.id}</a>
        </Link>
      ))}
    </div>
  );
}

export default Footer;
