import { useState, useEffect, useCallback } from "react";

import { Box } from "@chakra-ui/react";

import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";

export default function Navbar({ scrollLimit }) {
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

  return (
    <Box
      as="nav"
      borderBottom="1px"
      borderColor={hasScrolled ? "whiteAlpha.200" : "transparent"}
      backdropFilter="blur(5px)"
      position="sticky"
      zIndex={1}
      py={{ base: 4, md: 6 }}
      top={0}
      transition="border-color 0.2s"
      width="100%"
    >
      <Box display={{ base: "none", sm: "block" }}>
        <NavbarDesktop hasScrolled={hasScrolled} />
      </Box>

      <Box display={{ base: "block", sm: "none" }}>
        <NavbarMobile hasScrolled={hasScrolled} />
      </Box>
    </Box>
  );
}
