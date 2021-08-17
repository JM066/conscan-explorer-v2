import React from "react";
import Link from "next/link";

import { PAGES_FOOTER } from "../../../const";
import { SECTIONS } from "../../../const";
import World from "@/assets/icons/world.svg";
import Logo from "@/assets/icons/conunLogoFooter.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterItems}>
        <div className={styles.WorldCell}>
          <World className={styles.World} />
        </div>

        <div className={styles.IconContainer}>
          <div className={styles.LogoCell}>
            <Logo className={styles.Logo} />
            <p>Powered by Conun</p>
          </div>
          <div className={styles.Icons}>
            {PAGES_FOOTER.map((logo) => (
              <Link key={logo.id} href={logo.path}>
                <a className={styles.LogoIcon}>{logo.icon}</a>
              </Link>
            ))}
          </div>
          <div className={styles.Version}>
            Conun Blockchain Explorer V.2.0.0
          </div>
        </div>
        <div className={styles.CompanyCell}>
          <p>Company</p>
          {SECTIONS.company.map((company) => {
            return (
              <Link key={company.id} href={company.path}>
                <a className={styles.Company}>{company.name}</a>
              </Link>
            );
          })}
        </div>
        <div className={styles.CommunityCell}>
          <p>Community</p>
          {SECTIONS.community.map((community) => {
            return (
              <Link key={community.id} href={community.path}>
                <a className={styles.Community}>{community.name}</a>
              </Link>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
