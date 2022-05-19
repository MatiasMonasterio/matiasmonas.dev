import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import {
  Box,
  Container,
  Link,
  VStack,
  UnorderedList,
  ListItem,
  Button,
  VisuallyHidden,
  Text,
} from "@chakra-ui/react";

import { NavLink } from "./NavLink";
import { Logo } from "components/common";

import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionItem = motion(ListItem);

export const NavbarMobile = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const itemAnimate = useCallback(() => {
    return showMenu ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 };
  }, [showMenu]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu((showMenu) => {
      if (showMenu) return !showMenu;
    });
  }, [router]);

  return (
    <>
      <Container
        alignItems="center"
        display="flex"
        maxW="container.lg"
        transition="padding 0.2s"
      >
        <Button
          fontSize="2rem"
          variant="link"
          ml="auto"
          position="relative"
          color={showMenu ? "blackAlpha.900" : "whiteAlpha.900"}
          px={0}
          zIndex={2}
          onClick={handleShowMenu}
          transition="color .2s"
        >
          {showMenu ? <IoMdClose /> : <BiMenuAltRight />}
          <VisuallyHidden>Menu</VisuallyHidden>
        </Button>
      </Container>

      <MotionBox
        bg="gray.100"
        color="blackAlpha.900"
        height="100vh"
        left={0}
        position="absolute"
        pt={28}
        pb={10}
        top={0}
        opacity={0}
        animate={{ opacity: showMenu ? 1 : 0 }}
        pointerEvents={!showMenu && "none"}
        width="100%"
        transition="opacity 0.4s"
      >
        <Container
          display="flex"
          height="100%"
          flexDirection="column"
          justifyContent="center"
        >
          <UnorderedList
            styleType="none"
            fontSize="1.6rem"
            fontWeight="bold"
            display="flex"
            flexDirection="column"
            gap={6}
            alignItems="center"
          >
            <MotionItem animate={itemAnimate} transition={{ delay: 0.2 }}>
              <NavLink href="/">Sobre Mi</NavLink>
            </MotionItem>

            <MotionItem animate={itemAnimate} transition={{ delay: 0.25 }}>
              <NavLink href="#experience">Experiencia</NavLink>
            </MotionItem>

            <MotionItem animate={itemAnimate} transition={{ delay: 0.3 }}>
              <NavLink href="#projects">Proyectos</NavLink>
            </MotionItem>

            <MotionItem animate={itemAnimate} transition={{ delay: 0.35 }}>
              <NavLink href="#contact">Contacto</NavLink>
            </MotionItem>

            <MotionItem animate={itemAnimate} transition={{ delay: 0.4 }}>
              <NavLink href="/curriculum">CV</NavLink>
            </MotionItem>
          </UnorderedList>

          <Text
            color="blackAlpha.500"
            textAlign="center"
            mt={40}
            mb={10}
            fontWeight="500"
          >
            Puedes contactarme en{" "}
            <Link href="https://github.com/MatiasMonasterio">Github</Link>,{" "}
            <Link href="https://www.linkedin.com/in/matiasmonasterio/">
              LinkedIn
            </Link>{" "}
            o <Link href="https://twitter.com/MatiasMonas">Twitter</Link>
          </Text>

          <Box mx="auto">
            <Logo size={40} color="blackAlpha.800" />
          </Box>
        </Container>
      </MotionBox>
    </>
  );
};
