import { Head } from "components/common/Head";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

import {
  Box,
  Center,
  Heading,
  Container,
  Link,
  HStack,
  Text,
  Flex,
  Image,
  VisuallyHidden,
} from "@chakra-ui/react";

import { Section } from "components/common/Section";
import { NextPageLink } from "components/common/NextPageLink";

export default function Home() {
  return (
    <>
      <Head
        title="Matias M. Monasterio | Frontend Developer"
        description="Frontend Developer con conocimientos en Backend y afán por la tecnología"
      />

      <Box bg="gray.800" color="gray.300">
        <Center as="header" mt={10}>
          <Container maxW="container.md">
            <Flex
              flexDirection={{ base: "column-reverse", md: "row" }}
              gap={8}
              justifyContent="space-between"
            >
              <Box mb={10}>
                <Box mb={4}>
                  <Heading as="h1" size="lg">
                    Matias M. Monasterio
                  </Heading>
                  <Text fontSize="xl" fontStyle="italic" color="gray.400">
                    Frontend Developer
                  </Text>
                </Box>

                <HStack spacing={4} color="gray.500">
                  <Link
                    fontSize="xl"
                    href="https://github.com/MatiasMonasterio"
                    isExternal
                    _hover={{ color: "white" }}
                  >
                    <BsGithub />
                    <VisuallyHidden>Perfil de GitHub</VisuallyHidden>
                  </Link>

                  <Link
                    fontSize="xl"
                    href="https://www.linkedin.com/in/matiasmonasterio/"
                    isExternal
                    _hover={{ color: "white" }}
                  >
                    <BsLinkedin />
                    <VisuallyHidden>Perfil de LinkedIn</VisuallyHidden>
                  </Link>

                  <Link
                    fontSize="xl"
                    href="https://twitter.com/MatiasMonas"
                    isExternal
                    _hover={{ color: "white" }}
                  >
                    <BsTwitter />
                    <VisuallyHidden>Perfil de Twitter</VisuallyHidden>
                  </Link>
                </HStack>
              </Box>

              <Box>
                <Image
                  alt="Matías M. Monasterio"
                  borderRadius="full"
                  boxSize={{ base: 150, md: 125 }}
                  mx="auto"
                  height={{ base: 150, md: 125 }}
                  loading="lazy"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQGYbo7rSg6rtA/profile-displayphoto-shrink_800_800/0/1607717818872?e=1650499200&v=beta&t=swhnf2ZqCjqTNQmTFBV-xZDco26ebE3KvTB_UGeLPMg"
                  minW={{ base: 150, md: 125 }}
                />
              </Box>
            </Flex>
          </Container>
        </Center>

        <Box as="main">
          <Section>
            <Container maxW="container.md">
              <Box>
                <Heading
                  as="h2"
                  borderBottom="1px"
                  borderColor="gray.700"
                  mb={6}
                  py={2}
                  size="md"
                >
                  Sobre Mi
                </Heading>

                <Text mb={6}>
                  Desarrollo productos digitales mediante uso de las últimas
                  tecnologías, considerando cuál es la que mejor se adapte a la
                  solución. Interesado particularmente en tecnologías de
                  frontend, pero también llego a entrometerme en backend si es
                  necesario.
                </Text>

                <Text mb={6}>
                  Actualmente trabajando para España como Fullstack Developer en
                  Triditive y estudiando la carrera de Ingeniería Informática en
                  la Universidad Nacional de la Matanza.
                </Text>

                <Text mb={6}>
                  Persigo compartir conocimientos y ayudar a todos aquellos que
                  estén dispuestos a aprender.
                </Text>
              </Box>

              <Box display="flex" justifyContent="end">
                <NextPageLink href="/experience">Experiencia</NextPageLink>
              </Box>
            </Container>
          </Section>
        </Box>
      </Box>
    </>
  );
}
