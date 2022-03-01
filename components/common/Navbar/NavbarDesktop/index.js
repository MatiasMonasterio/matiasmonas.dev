import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import {
  Container,
  HStack,
  UnorderedList,
  ListItem,
  Box,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Logo } from "components/common/Logo";
import { NavLink } from "./NavLink";

import { motion } from "framer-motion";
const MotionBox = motion(Box);

export const NavbarDesktop = () => {
  const router = useRouter();
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    if (!showBrand && router.pathname !== "/") setShowBrand(true);
    if (showBrand && router.pathname === "/") setShowBrand(false);
  }, [router, showBrand]);

  return (
    <Container display="flex" maxW="container.md">
      <MotionBox
        animate={showBrand ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        initial={{ opacity: 0 }}
        pointerEvents={!showBrand && "none"}
      >
        <NavLink href="/">
          <Logo size={50} />
          <VisuallyHidden>Home</VisuallyHidden>
        </NavLink>
      </MotionBox>

      <UnorderedList styleType="none" ml="auto">
        <HStack spacing={6}>
          <ListItem>
            <NavLink href="/experience">Experiencia</NavLink>
          </ListItem>

          <ListItem>
            <NavLink href="/projects">Proyectos</NavLink>
          </ListItem>

          <ListItem>
            <NavLink href="/contact">Contacto</NavLink>
          </ListItem>

          <ListItem>
            <NavLink href="/curriculum">CV</NavLink>
          </ListItem>
        </HStack>
      </UnorderedList>
    </Container>
  );
};
