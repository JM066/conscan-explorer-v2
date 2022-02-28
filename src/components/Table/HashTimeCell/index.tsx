import classNames from "classnames";
import Wrapper from "@/components/Table/Wrapper";
import TimeStamp from "@/components/TimeStamp";
import IdenticonLink from "@/components/IdenticonLink";
import Cell from "@/components/Table/Cell";

import { getReducedHash } from "@/helpers/index";

import styles from "./HashTimeCell.module.scss";

export interface Props {
  hash: string;
  time: string;
  identicon?: boolean;
  index: number;
  link: string;
  hashLeft: number;
  hashRight: number;
  className?: string;
  variant: "green" | "grey" | "dark-grey";
}
function HashTimeCell({
  hash,
  time,
  identicon,
  index,
  link,
  hashLeft,
  hashRight,
  className,
  variant = "dark-grey",
}: Props) {
  return (
    <Cell grow className={classNames(styles.HashCell, className)}>
      {identicon && <IdenticonLink idString={index.toString()} link={link} />}
      <Wrapper className={styles.Wrapper}>
        <p className={styles[variant]}>
          {getReducedHash(hash, hashLeft, hashRight)}
        </p>
        <TimeStamp className={styles.Time} time={time} />
      </Wrapper>
    </Cell>
  );
}
export default HashTimeCell;
