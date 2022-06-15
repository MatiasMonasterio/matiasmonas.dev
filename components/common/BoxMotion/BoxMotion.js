import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BoxFramerMotion = motion(Box);

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: "5px" },
    visible: { opacity: 1, y: 0 },
  },
};

export default function BoxMotion({
  children,
  animation = "fadeIn",
  ...chakraProps
}) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? control.start("visible") : control.start("hidden");
  }, [control, inView]);

  return (
    <BoxFramerMotion
      {...chakraProps}
      variants={animations[animation]}
      initial="hidden"
      animate={control}
      ref={ref}
    >
      {children}
    </BoxFramerMotion>
  );
}
