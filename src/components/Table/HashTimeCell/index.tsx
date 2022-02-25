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
  hashLeft?: number;
  hashRight: number | 0;
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
  hashRight = 0,
  className,
  variant = "dark-grey",
}: Props) {
  const shortHash = `${hash.substring(0, hashLeft)}...${hash.substring(
    hash.length - hashRight
  )}`;

  return (
    <Cell grow className={classNames(styles.HashCell, className)}>
      {identicon && <IdenticonLink idString={index.toString()} link={link} />}
      <Wrapper className={styles.Wrapper}>
        <p className={styles[variant]}>{hashRight > 0 ? shortHash : hash}</p>
        <TimeStamp className={styles.Time} time={time} />
      </Wrapper>
    </Cell>
  );
}
export default HashTimeCell;
