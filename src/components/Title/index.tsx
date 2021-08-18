import React from "react";

import classNames from "classnames";

import styles from "./Title.module.scss";

interface Title {
  children: React.ReactNode;
  className?: string;
}

function Title({ className, children }: Title) {
  return <div className={classNames(styles.Title, className)}>{children}</div>;
}

export default Title;
