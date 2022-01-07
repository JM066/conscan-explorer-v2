import React from "react";
import classNames from "classnames";

import styles from "./Dropdown.module.scss";

interface Props {
  selected: string;
  children: React.ReactNode;
  classname?: string;
  onclick: React.MouseEventHandler<HTMLDivElement> | undefined;
  isDropdownOpen: boolean;
}
function Dropdown({
  children,
  selected,
  classname,
  onclick,
  isDropdownOpen,
}: Props) {
  return (
    <div className={classNames(styles.Dropdown, classname)}>
      <div onClick={onclick}>{selected}</div>
      {isDropdownOpen && children}
    </div>
  );
}
export default Dropdown;
