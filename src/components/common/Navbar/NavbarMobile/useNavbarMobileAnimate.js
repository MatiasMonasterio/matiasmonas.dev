import { useAnimation } from "framer-motion";

export const variantsBox = {
  visible: { opacity: 1, pointerEvents: "initial" },
  hidden: { opacity: 0, pointerEvents: "none" },
};

export const variantsItems = {
  visible: (i) => ({ x: 0, opacity: 1, transition: { delay: 0.2 + i * 5 } }),
  hidden: { x: -20, opacity: 0 },
};

export const useNavbarMobileAnimate = () => {
  const boxControls = useAnimation();
  const itemControls = useAnimation();

  const animateVisible = () => {
    boxControls.start(variantsBox.visible);
    itemControls.start(variantsItems.visible);
  };

  const animateHidden = () => {
    boxControls.start(variantsBox.hidden);
    itemControls.start(variantsItems.hidden);
  };

  return {
    boxControls,
    itemControls,
    animate: {
      visible: animateVisible,
      hide: animateHidden,
    },
  };
};
