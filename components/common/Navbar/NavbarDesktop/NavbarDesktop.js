import { motion } from "framer-motion";
import { Container, UnorderedList, ListItem, Box } from "@chakra-ui/react";

import { navLinks } from "../constants";
import { useNabarDesktopAnimate, variants } from "./useNabarDesktopAnimate";

import NavLink from "./NavLink";
import HomeLink from "./HomeLink";
import CvLink from "./CvLink";

const MotionBox = motion(Box);

export default function NavbarDesktop({ hasScrolled }) {
  const { animate } = useNabarDesktopAnimate(hasScrolled);

  return (
    <Container display="flex" maxW="container.md">
      <MotionBox variants={variants} initial="hidden" animate={animate}>
        <HomeLink />
      </MotionBox>

      <UnorderedList
        styleType="none"
        ml="auto"
        display="flex"
        flexDirection="row"
        gap={6}
      >
        {navLinks.map((link) => (
          <ListItem key={link.to}>
            <NavLink href={link.to}>{link.name}</NavLink>
          </ListItem>
        ))}

        <ListItem>
          <CvLink />
        </ListItem>
      </UnorderedList>
    </Container>
  );
}
