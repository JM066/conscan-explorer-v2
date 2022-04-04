import React, { useState } from "react";
import Link from "next/link";

import { PAGES_HEADER } from "../../../const";

import Dropdown from "@/components/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";
import ConunLogo from "@/assets/icons/conun-logo-head-bar.svg";
import { Locales } from "@/types/index";
import GlobalSymbol from "@/assets/icons/global_symbol.svg";
import Arrow from "@/assets/icons/dropdown_arrow.svg";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const LOCALES: Locales[] = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "한국어",
      value: "ko",
    },
  ];
  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const selectLanguage = (option: string) => {
    setLanguage(option);
  };

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
        <div className={styles.NavAndLocales}>
          <div className={styles.Navs}>
            {PAGES_HEADER.map((nav) => (
              <Link key={nav.id} href={nav.path}>
                <a className={styles.Nav}>{nav.name}</a>
              </Link>
            ))}
          </div>
          <div
            onClick={() => setIsDropdownOpen(false)}
            className={styles.InvisibleSelectorBox}
          ></div>
          <div className={styles.LocaleSelector}>
            <GlobalSymbol className={styles.Global} />
            <Dropdown
              classname={styles.Dropdown}
              onclick={handleDropdown}
              selected={language}
              isDropdownOpen={isDropdownOpen}
              arrow={<Arrow />}
            >
              <ul className={styles.ListItems}>
                {LOCALES.map((lang, index) => (
                  <DropdownItem
                    key={index}
                    onclick={() => selectLanguage(lang.label)}
                    item={lang.label}
                    className={styles.DropdownItem}
                  />
                ))}
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
