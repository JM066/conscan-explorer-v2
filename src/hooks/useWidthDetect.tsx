import React, { useLayoutEffect, useState } from "react";

function useWidthDetect(refWidth: React.RefObject<HTMLDivElement>) {
  const [size, setSize] = useState<number | undefined>(0);

  const updateSize = () => {
    const { current } = refWidth;
    const tableWidth = current?.offsetWidth;
    setSize(tableWidth);
  };
  useLayoutEffect(() => {
    updateSize();
    window?.addEventListener("resize", updateSize);

    return () => {
      window?.removeEventListener("resize", updateSize);
    };
  }, []);

  return size;
}

export default useWidthDetect;
