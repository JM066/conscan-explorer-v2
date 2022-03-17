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
  activityId: string;
  link: string;
  hashLeft: number;
  hashRight: number;
  variant: "green" | "grey" | "dark-grey";
  className?: string;
}
function HashTimeCell({
  hash,
  time,
  identicon,
  activityId,
  link,
  hashLeft,
  hashRight,
  variant = "dark-grey",
  className,
}: Props) {
  return (
    <Cell grow className={classNames(styles.HashCell, className)}>
      {identicon && <IdenticonLink idString={activityId} link={link} />}
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
