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
      <Button variant="ghost" onClick={handleLatest}>
        <FastForward />
      </Button>
      <Button variant="ghost" onClick={handlePrev}>
        <Prev />
      </Button>
      <Button variant="ghost" onClick={handleNext}>
        <Next />
      </Button>
      {handleOldest && (
        <Button variant="ghost" onClick={handleOldest}>
          <Rewind />
        </Button>
      )}
    </div>
  );
}
export default Pagination;
