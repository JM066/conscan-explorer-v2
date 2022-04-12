import { useState, useEffect } from "react";

import { Navigation } from "@/types/index";

function usePagination({
  initial,
  prevSteps,
  nextSteps,
  latestPage,
  oldestPage,
}: Navigation) {
  const [current, setCurrent] = useState<number>(initial);

  useEffect(() => {
    localStorage.setItem("page", current?.toString());
  }, [current]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("page");
    };
  }, [latestPage]);

  const latest = () => {
    setCurrent(latestPage);
  };

  const previous = () => {
    setCurrent(Math.max(0, current - prevSteps));
  };

  const next = () => {
    setCurrent(Math.min(latestPage, current + nextSteps));
  };

  const oldest = () => {
    setCurrent(oldestPage);
  };

  return {
    current,
    getLatest: () => latest(),
    getPrev: () => previous(),
    getNext: () => next(),
    getOldest: () => oldest(),
  };
}
export default usePagination;
