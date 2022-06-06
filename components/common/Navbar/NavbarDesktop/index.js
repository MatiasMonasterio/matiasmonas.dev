import {
  Container,
  UnorderedList,
  ListItem,
  Box,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Logo } from "components/common";
import { NavLink } from "./NavLink";

import { motion } from "framer-motion";
const MotionBox = motion(Box);

export const NavbarDesktop = ({ hasScrolled }) => {
  return (
    <Container display="flex" maxW="container.md">
      <MotionBox
        animate={hasScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        initial={{ opacity: 0 }}
        pointerEvents={!hasScrolled && "none"}
      >
        <NavLink href="/">
          <Logo size={40} />
          <VisuallyHidden>Home</VisuallyHidden>
        </NavLink>
      </MotionBox>

      <UnorderedList
        styleType="none"
        ml="auto"
        display="flex"
        flexDirection="row"
        gap={6}
      >
        <ListItem>
          <NavLink href="/#experience">Experiencia</NavLink>
        </ListItem>

        <ListItem>
          <NavLink href="/#projects">Proyectos</NavLink>
        </ListItem>

        <ListItem>
          <NavLink href="/#contact">Contacto</NavLink>
        </ListItem>

        <ListItem>
          <NavLink href="/curriculum">
            <Box
              as="span"
              color="whiteAlpha.900"
              border="1px solid"
              rounded="md"
              px="0.55rem"
              py="0.55rem"
              fontWeight="500"
              borderColor="yellow.200"
              transition="all 0.25s"
              _hover={{
                bg: "yellow.200",
                color: "blackAlpha.900",
              }}
            >
              CV
            </Box>
          </NavLink>
        </ListItem>
      </UnorderedList>
    </Container>
  );
};
