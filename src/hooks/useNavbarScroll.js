import { useState, useCallback, useEffect } from "react";

export const useNavbarScroll = (scrollLimit) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (!hasScrolled && window?.scrollY > scrollLimit) {
      setHasScrolled(true);
    } else if (hasScrolled && window?.scrollY <= scrollLimit) {
      setHasScrolled(false);
    }
  }, [scrollLimit, hasScrolled]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { hasScrolled };
};
