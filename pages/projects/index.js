import {
  Box,
  Center,
  Heading,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { Head } from "components/common/Head";
import { Section } from "components/common/Section";
import { NextPageLink } from "components/common/NextPageLink";

import { ProjectCard } from "components/projects/ProjectCard";

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

export default function Experience() {
  return (
    <>
      <Head
        title="Proyectos Destactados | Matias M. Monasterio"
        description="Proyectos destacados utilizando diferentes tecnologías web"
      />
      <Box bg="gray.800" color="gray.300">
        <Box as="main">
          <Center>
            <Section>
              <Container maxW="container.md">
                <Box mb={10}>
                  <Heading
                    as="h2"
                    size="md"
                    borderBottom="1px"
                    borderColor="gray.700"
                    py={2}
                    mb={6}
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

                <Box display="flex" justifyContent="end">
                  <NextPageLink href="/contact">Contacto</NextPageLink>
                </Box>
              </Container>
            </Section>
          </Center>
        </Box>
      </Box>
    </>
  );
}
