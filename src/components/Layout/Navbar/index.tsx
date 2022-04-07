import React, { useState } from "react";
import Link from "next/link";
import useStore from "@/store/store";

import Menu from "./Menu";
import Backdrop from "./Backdrop";
import MenuDrawer from "./MenuDrawer";
import MenuToggle from "@/components/Layout/Navbar/MenuToggle";
import ConunLogoDark from "@/assets/icons/conun-logo-head-bar.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [language, setLanguage] = useState("English");
  const isMobile = useStore((state) => state.isMobile);

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const selectLanguage = (option: string) => {
    setLanguage(option);
  };
  const handleBackdrop = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className={styles.Header}>
      <div className={styles.Navbar}>
        <div className={styles.Logo}>
          <Link href="/">
            <a>
              <ConunLogoDark />
            </a>
          </Link>
        </div>
        {!isMobile ? (
          <Menu
            handleDropdown={handleDropdown}
            language={language}
            isDropdownOpen={isDropdownOpen}
            selectLanguage={selectLanguage}
          />
        ) : (
          <div className={isDropdownOpen ? styles.MenuDown : styles.MenuUp}>
            <MenuDrawer open={isDropdownOpen} />
            <MenuToggle toggleClick={handleDropdown} />
            {isDropdownOpen && (
              <Backdrop handleBackdrop={handleBackdrop}></Backdrop>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
