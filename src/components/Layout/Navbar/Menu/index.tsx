import React from "react";
import Link from "next/link";
import { PAGES_HEADER, LOCALES } from "../../../../const";
import Dropdown from "@/components/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";
import GlobalSymbol from "@/assets/icons/global_symbol.svg";
import Arrow from "@/assets/icons/dropdown_arrow.svg";
import styles from "./Menu.module.scss";

interface Props {
  handleDropdown: () => void;
  language: string;
  isDropdownOpen: boolean;
  selectLanguage: (val: string) => void;
}
function Menu({
  handleDropdown,
  language,
  isDropdownOpen,
  selectLanguage,
}: Props) {
  return (
    <div className={styles.Menu}>
      {PAGES_HEADER.map((nav) => (
        <Link key={nav.id} href={nav.path}>
          <a className={styles.Link}>{nav.name}</a>
        </Link>
      ))}

      <div className={styles.MenuRight}>
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
  );
}
export default Menu;
