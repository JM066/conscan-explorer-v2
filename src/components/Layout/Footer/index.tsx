import React from "react";
import Link from "next/link";
import useStore from "@/store/store";
import { COMUMUNITY, SOLUTIONS, COMPANY } from "../../../const";

import Logo from "@/assets/icons/conunLogoFooter.svg";
import styles from "./Footer.module.scss";

function Footer() {
  const isMobile = useStore((state) => state.isMobile);
  const logoAndCopyRight = (
    <div className={styles.LogoContainer}>
      <Logo className={styles.Logo} />
      <div className={styles.CopyRight}>
        <div>© 2021 CONUN</div>
        <div>Connecting on Universal Networks</div>
      </div>
      {isMobile && <div>CONSCAN V.2.0.0</div>}
    </div>
  );

  return (
    <div className={styles.FooterPage}>
      <div className={styles.FooterItems}>
        {!isMobile && logoAndCopyRight}
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
        {!isMobile && <div>CONSCAN V.2.0.0</div>}
      </div>
      {isMobile && (
        <div className={styles.MobileContainer}>{logoAndCopyRight}</div>
      )}
    </div>
  );
}

export default Footer;
