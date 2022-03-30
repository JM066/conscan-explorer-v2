import classNames from "classnames";

import Button from "@/components/Button";
import Rewind from "@/assets/icons/rewind.svg";
import FastForward from "@/assets/icons/fast-forward.svg";
import Prev from "@/assets/icons/prev.svg";
import Next from "@/assets/icons/next.svg";

import styles from "./Pagination.module.scss";

interface Props {
  className?: string;
  isMobile?: boolean;
  handleLatest?: () => void;
  handleOldest?: () => void;
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
      <Button variant="ghost">
        <FastForward onClick={handleLatest} />
      </Button>
      <Button variant="ghost">
        <Prev onClick={handlePrev} />
      </Button>
      <Button variant="ghost">
        <Next onClick={handleNext} />
      </Button>
      {handleOldest && (
        <Button variant="ghost">
          <Rewind onClick={handleOldest} />
        </Button>
      )}
    </div>
  );
}
export default Pagination;
