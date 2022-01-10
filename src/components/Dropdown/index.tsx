import React from "react";
import classNames from "classnames";

import styles from "./Dropdown.module.scss";

interface Props {
  selected: string;
  children: React.ReactNode;
  classname?: string;
  onclick: React.MouseEventHandler<HTMLDivElement> | undefined;
  isDropdownOpen: boolean;
  arrow?: React.ReactNode;
}
function Dropdown({
  children,
  selected,
  classname,
  onclick,
  isDropdownOpen,
  arrow,
}: Props) {
  return (
    <div className={classNames(styles.Dropdown, classname)}>
      <div onClick={onclick} className={styles.SelectedItemContainer}>
        <div>{selected}</div>
        {!!arrow && arrow}
      </div>

      {isDropdownOpen && children}
    </div>
  );
}
export default Dropdown;
