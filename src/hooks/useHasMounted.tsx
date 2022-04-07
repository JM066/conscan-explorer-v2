import { useState, useEffect } from "react";
function useHasMounted() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
export default useHasMounted;
