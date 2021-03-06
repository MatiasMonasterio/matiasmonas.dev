import { useState, useEffect } from "react";

import {
  Box,
  Container,
  Text,
  HStack,
  Link,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { github, linkedin, twitter } from "src/constants/social-networks";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      as="footer"
      mt="auto"
      py={4}
      color="whiteAlpha.400"
      borderTop="1px"
      borderColor="whiteAlpha.100"
    >
      <Container
        maxW="container.md"
        display="flex"
        justifyContent="space-between"
      >
        <Text fontSize="sm" fontStyle="italic">
          Buenos Aires {year}
        </Text>

        <HStack>
          <Text fontSize="sm" fontStyle="italic">
            Contáctame en
          </Text>
          <Link _hover={{ color: "yellow.200" }} href={github} isExternal>
            <BsGithub />
            <VisuallyHidden>Github Profile</VisuallyHidden>
          </Link>
          <Link _hover={{ color: "yellow.200" }} href={linkedin} isExternal>
            <BsLinkedin />
            <VisuallyHidden>LinkedIn Profile</VisuallyHidden>
          </Link>
          <Link _hover={{ color: "yellow.200" }} href={twitter} isExternal>
            <BsTwitter />
            <VisuallyHidden>Twitter Profile</VisuallyHidden>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}
