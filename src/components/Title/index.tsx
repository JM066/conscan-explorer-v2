import React from "react";

import classNames from "classnames";

import styles from "./Title.module.scss";

interface Title {
  title: string;
  className?: string;
}

function Title({ className, title }: Title) {
  return <div className={classNames(styles.Title, className)}>{title}</div>;
}

export default Title;
