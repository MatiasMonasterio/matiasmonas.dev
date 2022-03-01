// imported with common to ssr
const { motion } = require("framer-motion");
import dynamic from "next/dynamic";

import { Box, usePrefersReducedMotion } from "@chakra-ui/react";
import { Navbar } from "components/common/Navbar";
import { Footer } from "components/common/Footer";

const Noise = dynamic(() =>
  import("components/common/Noise").then(({ Noise }) => Noise)
);

export const Main = ({ children }) => {
  const BoxMotion = motion(Box);
  const reduceMotion = usePrefersReducedMotion();

  return (
    <Box
      backgroundColor="gray.800"
      minH="100vh"
      display="flex"
      flexDirection="column"
    >
      {!reduceMotion && <Noise />}

      <Navbar scrollLimit={80} />

      <BoxMotion minH="100%" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </BoxMotion>

      <Footer />
    </Box>
  );
};
