import { Head } from "components/common";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
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

import { ProjectCard, ContactForm } from "components/home";

const projects = [
  {
    title: "Spotify Web Player Clone",
    description: "Clone con conexion a API de spotify",
    technologies: ["Angular", "Bootstrap", "SCSS", "BEM"],
    github: "https://github.com/MatiasMonasterio/SpotifyWebPlayer",
    website: "https://spotify-web-player-clone.netlify.app/#/",
  },
  {
    title: "Luna Golf Store",
    description: "Proyecto fin de curso WebMaster UTN",
    technologies: [
      "NodeJS",
      "Express",
      "Handlebars",
      "SCSS",
      "PostCSS",
      "Bootstrap",
      "MySql",
      "Sequelize",
    ],
    github: "https://github.com/MatiasMonasterio/Lunagolfstore-webmaster2020",
    website: "https://lunagolfstore.herokuapp.com/",
  },
  {
    title: "AlquilerApp",
    description: "Proyecto fin de curso Fullstack .NET ComunidadIT",
    technologies: [
      "C#",
      "ASP.NET Core MVC",
      "Entity Framework",
      "SQL Server",
      "Bootstrap",
    ],
    github: "https://github.com/MatiasMonasterio/Lunagolfstore-webmaster2020",
  },
];

export default function Home() {
  return (
    <>
      <Head
        title="Matias M. Monasterio | Frontend Developer"
        description="Frontend Developer con conocimientos en Backend y afán por la tecnología"
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
                  Matias M. Monasterio
                </Heading>
                <Text fontSize="xl" fontStyle="italic">
                  Frontend Developer
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
                alt="Matías M. Monasterio"
                borderRadius="full"
                boxSize={{ base: 150, md: 120 }}
                mx="auto"
                height={{ base: 150, md: 120 }}
                loading="lazy"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGYbo7rSg6rtA/profile-displayphoto-shrink_800_800/0/1607717818872?e=1650499200&v=beta&t=swhnf2ZqCjqTNQmTFBV-xZDco26ebE3KvTB_UGeLPMg"
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

            <Text mb={6}>
              Desarrollo productos digitales mediante uso de las últimas
              tecnologías, considerando cuál es la que mejor se adapte a la
              solución. Interesado particularmente en tecnologías de frontend,
              pero también llego a entrometerme en backend si es necesario.
            </Text>

            <Text mb={6}>
              Actualmente trabajando para España como Fullstack Developer en
              Triditive y estudiando la carrera de Ingeniería Informática en la
              Universidad Nacional de la Matanza.
            </Text>

            <Text mb={6}>
              Persigo compartir conocimientos y ayudar a todos aquellos que
              estén dispuestos a aprender.
            </Text>
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
              <Box>
                <Box mb={2}>
                  <Heading as="h3" size="sm" display="inline-block">
                    <Link
                      alignItems="end"
                      display="flex"
                      href="https://www.linkedin.com/company/triditive/"
                      isExternal
                      gap="0.2rem"
                      color="whiteAlpha.800"
                    >
                      Triditive S.L
                      <Box fontSize="sm">
                        <BiLinkExternal />
                      </Box>
                    </Link>
                  </Heading>
                  <Heading
                    as="h4"
                    color="whiteAlpha.500"
                    fontStyle="italic"
                    fontWeight="normal"
                    size="sm"
                  >
                    Fullstack Developer
                  </Heading>
                </Box>

                <Text mb={1}>
                  Participación en planificación e investigación de nuevos
                  proyectos, desarrollo de productos para gestión de usuarios,
                  resolución de incidentes relacionados a los sistemas actuales.
                </Text>

                <Text fontSize="xs" color="whiteAlpha.500">
                  Febrero 2021 — Actualidad
                </Text>
              </Box>

              <Box>
                <Box mb={2}>
                  <Heading as="h3" size="sm" display="inline-block">
                    <Link
                      alignItems="end"
                      display="flex"
                      href="https://www.linkedin.com/company/atento/"
                      isExternal
                      gap="0.2rem"
                      color="whiteAlpha.800"
                    >
                      Atento S.A
                      <Box fontSize="sm">
                        <BiLinkExternal />
                      </Box>
                    </Link>
                  </Heading>

                  <Heading
                    as="h4"
                    color="whiteAlpha.500"
                    fontStyle="italic"
                    fontWeight="normal"
                    size="sm"
                  >
                    Representante Soporte Técnico
                  </Heading>
                </Box>

                <Text mb={1}>
                  Atención telefónica y remota a usuarios, brindar asesoramiento
                  sobre consultas realizadas por el usuario, resolver incidentes
                  técnicos (hardware y software).
                </Text>

                <Text fontSize="xs" color="whiteAlpha.500">
                  Febrero 2016 — Febrero 2019
                </Text>
              </Box>
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
