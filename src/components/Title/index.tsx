import React from "react";

import classNames from "classnames";

import styles from "./Title.module.scss";

interface Title {
  title: string;
  className?: string;
  bolded?: boolean;
}

function Title({ className, title, bolded = true }: Title) {
  return (
    <div
      className={classNames(styles.Title, { [styles.bold]: bolded }, className)}
    >
      {title}
    </div>
  );
}

export default Title;
