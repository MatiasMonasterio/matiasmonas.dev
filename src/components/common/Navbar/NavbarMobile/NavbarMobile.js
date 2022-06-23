import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Link,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { github, linkedin, twitter } from "src/constants/social-networks";
import { Logo } from "src/components/common";

import {
  useNavbarMobileAnimate,
  variantsBox,
  variantsItems,
} from "./useNavbarMobileAnimate";

import NavLink from "./NavLink";
import MenuButton from "./MenuButton";

const MotionBox = motion(Box);
const MotionItem = motion(ListItem);

import { navLinks } from "../constants";
const navLinksMobile = [...navLinks];
navLinksMobile.unshift({ name: "Sobre Mi", to: "/" });
navLinksMobile.push({ name: "CV", to: "/curriculum" });

export default function NavbarMobile() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const { animate, boxControls, itemControls } = useNavbarMobileAnimate();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    showMenu && setShowMenu(!showMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    showMenu ? animate.visible() : animate.hide();
  }, [showMenu, animate]);

  return (
    <>
      <Container
        alignItems="center"
        display="flex"
        maxW="container.lg"
        transition="padding 0.2s"
      >
        <MenuButton active={showMenu} onClick={handleShowMenu} />
      </Container>

      <MotionBox
        variants={variantsBox}
        initial="hidden"
        animate={boxControls}
        bg="gray.100"
        color="blackAlpha.900"
        height="100vh"
        left={0}
        position="absolute"
        pt={28}
        pb={10}
        top={0}
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
            {navLinksMobile.map((link) => (
              <MotionItem
                variants={variantsItems}
                initial="hidden"
                animate={itemControls}
                key={link.to}
              >
                <NavLink href={link.to}>{link.name}</NavLink>
              </MotionItem>
            ))}
          </UnorderedList>

          <Text
            color="blackAlpha.500"
            textAlign="center"
            mt={40}
            mb={10}
            fontWeight="500"
          >
            Puedes contactarme en <Link href={github}>Github</Link>,{" "}
            <Link href={linkedin}>LinkedIn</Link> o{" "}
            <Link href={twitter}>Twitter</Link>
          </Text>

          <Box mx="auto">
            <Logo size={40} color="blackAlpha.800" />
          </Box>
        </Container>
      </MotionBox>
    </>
  );
}
