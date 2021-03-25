import { useEffect, useState } from "react";

const useHasScrolled = (offsetFromTop: number): boolean => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;
      currentPosition > offsetFromTop
        ? setHasScrolled(true)
        : setHasScrolled(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offsetFromTop, hasScrolled]);

  return hasScrolled;
};

export default useHasScrolled;
