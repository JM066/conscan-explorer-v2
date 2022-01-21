import React from "react";
import Link from "next/link";

import { COMUMUNITY, SOLUTIONS, COMPANY } from "../../../const";

import Logo from "@/assets/icons/conunLogoFooter.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterItems}>
        <div className={styles.LogoCell}>
          <Logo className={styles.Logo} />
        </div>

        <div className={styles.CommunityCell}>
          <p>Company</p>
          {COMPANY.map((section) => {
            return (
              <Link key={section.id} href={section.path}>
                <a className={styles.Company}>{section.name}</a>
              </Link>
            );
          })}
        </div>
        <div className={styles.SolutionCell}>
          <p>Solutions</p>
          {SOLUTIONS.map((section) => (
            <Link key={section.id} href={section.path}>
              <a className={styles.Solutions}>{section.name}</a>
            </Link>
          ))}
        </div>
        <div className={styles.CompanyCell}>
          <p>Community</p>
          {COMUMUNITY.map((section) => (
            <Link key={section.id} href={section.path}>
              <a className={styles.Community}>{section.name}</a>
            </Link>
          ))}
        </div>
        <div className={styles.Version}>CONSCAN V.2.0.0</div>
      </div>
    </div>
  );
}

export default Footer;
