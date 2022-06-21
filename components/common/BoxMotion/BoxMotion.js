import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

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
  const animate = useAnimation();

  return (
    <BoxFramerMotion
      {...chakraProps}
      variants={animations[animation]}
      animate={animate}
      initial="visible"
      onViewportLeave={() => animate.start("hidden")}
      onViewportEnter={() => animate.start("visible")}
    >
      {children}
    </BoxFramerMotion>
  );
}
