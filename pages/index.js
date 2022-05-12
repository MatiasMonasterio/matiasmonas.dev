import { Head } from "components/common";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import {
  Box,
  Center,
  Heading,
  Link,
  HStack,
  VStack,
  Text,
  Flex,
  Image,
  Grid,
  GridItem,
  VisuallyHidden,
} from "@chakra-ui/react";

import { ProjectCard, ContactForm, ExperienceItem } from "components/home";
import { getProfile, getExperiencies, getMainProjects } from "services";

export default function Home({ profile, experiences, projects }) {
  return (
    <>
      <Head
        title={`${profile.name} | ${profile.position}`}
        description={profile.excerpt}
      />

      <Box color="whiteAlpha.700" my={12}>
        <Center as="header" mb={10}>
          <Flex
            flexDirection={{ base: "column-reverse", md: "row" }}
            gap={8}
            justifyContent="space-between"
            w="100%"
          >
            <Box mb={10} d="flex" flexDir="column" justifyContent="flex-end">
              <Box mb={4}>
                <Heading as="h1" size="lg" color="whiteAlpha.900">
                  {profile.name}
                </Heading>
                <Text fontSize="xl" fontStyle="italic">
                  {profile.position}
                </Text>
              </Box>

              <HStack spacing={4} color="whiteAlpha.400">
                <Link
                  fontSize="xl"
                  href="https://github.com/MatiasMonasterio"
                  isExternal
                  _hover={{ color: "yellow.200" }}
                >
                  <BsGithub />
                  <VisuallyHidden>Perfil de GitHub</VisuallyHidden>
                </Link>

                <Link
                  fontSize="xl"
                  href="https://www.linkedin.com/in/matiasmonasterio/"
                  isExternal
                  _hover={{ color: "yellow.200" }}
                >
                  <BsLinkedin />
                  <VisuallyHidden>Perfil de LinkedIn</VisuallyHidden>
                </Link>

                <Link
                  fontSize="xl"
                  href="https://twitter.com/MatiasMonas"
                  isExternal
                  _hover={{ color: "yellow.200" }}
                >
                  <BsTwitter />
                  <VisuallyHidden>Perfil de Twitter</VisuallyHidden>
                </Link>
              </HStack>
            </Box>

            <Box>
              <Image
                alt={profile.name}
                borderRadius="full"
                boxSize={{ base: 150, md: 120 }}
                mx="auto"
                height={{ base: 150, md: 120 }}
                loading="lazy"
                src="static/images/profile.jpg"
                minW={{ base: 150, md: 120 }}
              />
            </Box>
          </Flex>
        </Center>

        <VStack as="main" spacing={16}>
          <Box as="section">
            <Heading
              as="h2"
              borderBottom="1px"
              borderColor="whiteAlpha.300"
              mb={6}
              py={2}
              size="md"
              color="whiteAlpha.900"
            >
              Sobre Mi
            </Heading>

            {profile.description.map((descriptionItem) => (
              <Text mb={6} key={descriptionItem}>
                {descriptionItem}
              </Text>
            ))}
          </Box>

          <Box id="experience" as="section">
            <Heading
              as="h2"
              size="md"
              borderBottom="1px"
              borderColor="whiteAlpha.300"
              py={2}
              mb={6}
              color="whiteAlpha.900"
            >
              Experiencia laboral
            </Heading>

            <VStack spacing={6}>
              {experiences.map((experience) => (
                <ExperienceItem {...experience} key={experience.id} />
              ))}
            </VStack>
          </Box>

          <Box id="projects" as="section">
            <Heading
              as="h2"
              size="md"
              borderBottom="1px"
              borderColor="whiteAlpha.300"
              py={2}
              mb={6}
              color="whiteAlpha.900"
            >
              Proyectos Destacados
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              rowGap={16}
              columnGap={6}
            >
              {projects.map((project) => (
                <GridItem key={project.title}>
                  <ProjectCard {...project} />
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Box id="contact" w="100%" as="section">
            <Heading
              as="h2"
              size="md"
              borderBottom="1px"
              borderColor="whiteAlpha.300"
              py={2}
              mb={6}
              color="whiteAlpha.900"
              id="contact"
            >
              Contacto
            </Heading>

            <ContactForm />
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export const getServerSideProps = async () => {
  const profile = await getProfile();
  const experiences = await getExperiencies();
  const projects = await getMainProjects();

  return {
    props: {
      profile,
      experiences,
      projects,
    },
  };
};
