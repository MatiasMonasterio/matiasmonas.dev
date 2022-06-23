import dynamic from "next/dynamic";

import { Box, usePrefersReducedMotion, Container } from "@chakra-ui/react";
import { Footer, Navbar } from "src/components/common";

const Noise = dynamic(() => import("src/components/common/Noise"));

export default function MainLayout({ children }) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="blackAlpha.900">
      {!reduceMotion && <Noise />}

      <Navbar scrollLimit={80} />

      <Box minH="100%" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Container maxW="container.md">{children}</Container>
      </Box>

      <Footer />
    </Box>
  );
}
