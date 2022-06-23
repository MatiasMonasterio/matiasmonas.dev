import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

import { useNavbarScroll } from "src/hooks";

const NavbarMobile = dynamic(() => import("./NavbarMobile"));
const NavbarDesktop = dynamic(() => import("./NavbarDesktop"));

export default function Navbar({ scrollLimit }) {
  const { hasScrolled } = useNavbarScroll(scrollLimit);

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
