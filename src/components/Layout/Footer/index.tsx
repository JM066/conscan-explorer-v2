import React from "react";
import Link from "next/link";
import useStore from "@/store/store";
import { COMUMUNITY, SOLUTIONS, COMPANY } from "../../../const";

import Logo from "@/assets/icons/conunLogoFooter.svg";
import styles from "./Footer.module.scss";

function Footer() {
  console.log("window", window.innerWidth);
  const isMobile = useStore((state) => state.isMobile);
  return (
    <div className={styles.FooterPage}>
      <div className={styles.FooterItems}>
        {!isMobile && (
          <div className={styles.LogoCell}>
            <Logo className={styles.Logo} />
            <div className={styles.CopyRightContainer}>
              <div>2021 CONUN</div>
              <div>Connecting on Universal Networks</div>
            </div>
          </div>
        )}
        <div className={styles.CompanySection}>
          <div> Company</div>
          {COMPANY.map((company) => {
            return (
              <Link key={company.id} href={company.path}>
                <a className={styles.Company}>{company.name}</a>
              </Link>
            );
          })}
        </div>
        <div className={styles.SolutionSection}>
          <div> Solutions</div>
          {SOLUTIONS.map((solution) => (
            <Link key={solution.id} href={solution.path}>
              <a className={styles.Solutions}>{solution.name}</a>
            </Link>
          ))}
        </div>

        <div className={styles.CommunitySection}>
          <div> Community</div>
          {COMUMUNITY.map((community) => (
            <Link key={community.id} href={community.path}>
              <a className={styles.Community}>{community.name}</a>
            </Link>
          ))}
        </div>
        {!isMobile && <div className={styles.Version}>CONSCAN V.2.0.0</div>}
      </div>
      {isMobile && (
        <div className={styles.MobileContainer}>
          <Logo className={styles.ConunLogo} />
          <div className={styles.CopyRightContainer}>
            <div>2021 CONUN</div>
            <div>Connecting on Universal Networks</div>
          </div>
          <div className={styles.Version}>CONSCAN V.2.0.0</div>
        </div>
      )}
    </div>
  );
}

export default Footer;
