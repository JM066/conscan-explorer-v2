import classNames from "classnames";
import Rewind from "@/assets/icons/rewind.svg";
import FastForward from "@/assets/icons/fast-forward.svg";
import Prev from "@/assets/icons/prev.svg";
import Next from "@/assets/icons/next.svg";

import styles from "./Pagination.module.scss";

interface Props {
  className?: string;
  handleLatest: () => void;
  handleOldest: () => void;
  handlePrev: () => void;
  handleNext: () => void;
}
function Pagination({
  className,
  handleLatest,
  handleOldest,
  handlePrev,
  handleNext,
}: Props) {
  return (
    <div className={classNames(styles.PaginationButtons, className)}>
      <FastForward onClick={handleLatest} />
      <Prev onClick={handlePrev} />
      <Next onClick={handleNext} />
      <Rewind onClick={handleOldest} />
    </div>
  );
}
export default Pagination;
