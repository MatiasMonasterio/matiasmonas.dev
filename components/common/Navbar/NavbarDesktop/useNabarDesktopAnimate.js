import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const variants = {
  visible: { opacity: 1, y: 0, pointerEvents: "initial" },
  hidden: { opacity: 0, y: 4, pointerEvents: "none" },
};

export const useNabarDesktopAnimate = (hasScrolled) => {
  const animate = useAnimation();

  useEffect(() => {
    if (hasScrolled) animate.start(variants.visible);
    else animate.start(variants.hidden);
  }, [hasScrolled, animate]);

  return { animate };
};
