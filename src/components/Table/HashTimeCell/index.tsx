import classNames from "classnames";
import Wrapper from "@/components/Table/Wrapper";
import TimeStamp from "@/components/TimeStamp";
import IdenticonLink from "@/components/IdenticonLink";
import Cell from "@/components/Table/Cell";

import styles from "./HashTimeCell.module.scss";

interface Props {
  hash: string;
  time: string;
  identicon?: boolean;
  index: number;
  link: string;
  hashLeft?: number | undefined;
  hashRight?: number | undefined;
  className?: string;
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
}: Props) {
  const shortHash = `${hash.substring(0, hashLeft)}...${hash.substring(
    hash.length - hashRight!
  )}`;

  return (
    <Cell grow className={classNames(styles.HashCell, className)}>
      {identicon && <IdenticonLink idString={index.toString()} link={link} />}
      <Wrapper className={styles.Wrapper}>
        <p>{!!hashLeft && !!hashRight ? shortHash : hash}</p>
        <TimeStamp className={styles.Time} time={time} />
      </Wrapper>
    </Cell>
  );
}
export default HashTimeCell;
