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

export const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      as="footer"
      mt="auto"
      py={4}
      color="gray.300"
      borderTop="1px"
      borderColor="gray.700"
    >
      <Container
        maxW="container.md"
        display="flex"
        justifyContent="space-between"
        color="gray.500"
      >
        <Text fontSize="sm" fontStyle="italic">
          Buenos Aires {year}
        </Text>

        <HStack>
          <Text fontSize="sm" fontStyle="italic">
            Contactame en
          </Text>
          <Link
            _hover={{ color: "gray.300" }}
            href="https://github.com/MatiasMonasterio"
            isExternal
          >
            <BsGithub />
            <VisuallyHidden>Github Profile</VisuallyHidden>
          </Link>

          <Link
            _hover={{ color: "gray.300" }}
            href="https://www.linkedin.com/in/matiasmonasterio/"
            isExternal
          >
            <BsLinkedin />
            <VisuallyHidden>LinkedIn Profile</VisuallyHidden>
          </Link>

          <Link
            _hover={{ color: "gray.300" }}
            href="https://twitter.com/MatiasMonas"
            isExternal
          >
            <BsTwitter />
            <VisuallyHidden>Twitter Profile</VisuallyHidden>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};
