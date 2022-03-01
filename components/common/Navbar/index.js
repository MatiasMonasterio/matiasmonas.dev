import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";

import { Box, useMediaQuery } from "@chakra-ui/react";

const NavbarMobile = dynamic(() =>
  import("./NavbarMobile").then(({ NavbarMobile }) => NavbarMobile)
);

const NavbarDesktop = dynamic(() =>
  import("./NavbarDesktop").then(({ NavbarDesktop }) => NavbarDesktop)
);

export const Navbar = ({ scrollLimit }) => {
  // default breakpoint md https://chakra-ui.com/docs/theming/theme#breakpoints
  const [isMobile] = useMediaQuery("(max-width: 48em)");
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
      backgroundColor="gray.800"
      borderBottom="1px"
      borderColor={hasScrolled ? "gray.700" : "transparent"}
      color="gray.300"
      position="sticky"
      zIndex={1}
      py={{ base: hasScrolled ? 4 : 6, md: hasScrolled ? 6 : 8 }}
      top={0}
      transition="border-color 0.2s, padding 0.2s"
      width="100%"
    >
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </Box>
  );
};
