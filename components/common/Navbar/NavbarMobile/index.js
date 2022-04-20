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
import { Logo } from "components/common/Logo";

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
        {router.pathname !== "/" && (
          <NavLink href="/">
            <Logo size={40} color="gray.300" />
          </NavLink>
        )}

        <Button
          fontSize="2rem"
          variant="link"
          ml="auto"
          position="relative"
          color={showMenu ? "gray.900" : "gray.300"}
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
        bg="gray.300"
        color="gray.900"
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
          <UnorderedList styleType="none">
            <VStack spacing={4} fontSize="1.6rem" fontWeight="bold">
              <MotionItem animate={itemAnimate} transition={{ delay: 0 }}>
                <NavLink href="/">Sobre Mi</NavLink>
              </MotionItem>

              <MotionItem animate={itemAnimate} transition={{ delay: 0.05 }}>
                <NavLink href="/experience">Experiencia</NavLink>
              </MotionItem>

              <MotionItem animate={itemAnimate} transition={{ delay: 0.1 }}>
                <NavLink href="/projects">Proyectos</NavLink>
              </MotionItem>

              <MotionItem animate={itemAnimate} transition={{ delay: 0.15 }}>
                <NavLink href="/contact">Contacto</NavLink>
              </MotionItem>

              <MotionItem animate={itemAnimate} transition={{ delay: 0.2 }}>
                <NavLink href="/curriculum">CV</NavLink>
              </MotionItem>
            </VStack>
          </UnorderedList>

          <Text color="gray.500" textAlign="center" mt={40} mb={10}>
            Puedes contactarme en{" "}
            <Link href="https://github.com/MatiasMonasterio">Github</Link>,{" "}
            <Link href="https://www.linkedin.com/in/matiasmonasterio/">
              LinkedIn
            </Link>{" "}
            o <Link href="https://twitter.com/MatiasMonas">Twitter</Link>
          </Text>

          <Box mx="auto">
            <Logo size={40} color="gray.800" />
          </Box>
        </Container>
      </MotionBox>
    </>
  );
};
