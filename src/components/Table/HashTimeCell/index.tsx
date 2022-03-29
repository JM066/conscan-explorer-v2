import classNames from "classnames";
import Wrapper from "@/components/Table/Wrapper";
import TimeStamp from "@/components/TimeStamp";
import Cell from "@/components/Table/Cell";
import IdenticonLink from "@/components/IdenticonLink";
import { IdenticonLinkProps } from "@/components/IdenticonLink";
import { getReducedHash } from "@/helpers/index";

import styles from "./HashTimeCell.module.scss";

export interface Props extends IdenticonLinkProps {
  hash: string;
  time: string;
  hashLeft: number;
  hashRight: number;
  variant: "green" | "grey" | "dark-grey";
  className?: string;
  identicon?: boolean;
}
function HashTimeCell({
  hash,
  time,
  hashLeft,
  hashRight,
  idString,
  identicon,
  variant = "dark-grey",
  className,
  link,
}: Props) {
  return (
    <Cell className={classNames(styles.HashCell, className)}>
      {identicon && <IdenticonLink idString={idString} link={link} />}
      <Wrapper className={styles.Wrapper}>
        <div className={styles[variant]}>
          {getReducedHash(hash, hashLeft, hashRight)}
        </div>
        <TimeStamp className={styles.Time} time={time} />
      </Wrapper>
    </Cell>
  );
}
export default HashTimeCell;
