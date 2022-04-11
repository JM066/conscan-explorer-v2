import { useEffect } from "react";
import classNames from "classnames";

import Button from "@/components/Button";
import usePagination from "@/hooks/usePagination";
import Rewind from "@/assets/icons/rewind.svg";
import FastForward from "@/assets/icons/fast-forward.svg";
import Next from "@/assets/icons/next.svg";
import Prev from "@/assets/icons/prev.svg";
import { Navigation } from "@/types/index";
import styles from "./Pagination.module.scss";

interface Props {
  className?: string;
  isMobile?: boolean;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  navigation: Navigation;
}
function Pagination({ className, navigation, setPage }: Props) {
  const navigatePage = usePagination(navigation);

  useEffect(() => {
    setPage(navigatePage.current.toString());
  }, [navigatePage]);

  return (
    <div className={classNames(styles.PaginationButtons, className)}>
      <Button variant="ghost" onClick={navigatePage.getLatest}>
        <FastForward />
      </Button>
      <Button variant="ghost" onClick={navigatePage.getNext}>
        <Next />
      </Button>
      <Button variant="ghost" onClick={navigatePage.getPrev}>
        <Prev />
      </Button>
      {navigation?.oldestPage && (
        <Button variant="ghost" onClick={navigatePage.getOldest}>
          <Rewind />
        </Button>
      )}
    </div>
  );
}
export default Pagination;
