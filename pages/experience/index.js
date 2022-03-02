import { Box, Center, Heading, Container, Text, Link } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

import { Section } from "components/common/Section";
import { NextPageLink } from "components/common/NextPageLink";

export default function Experience() {
  return (
    <Box bg="gray.800" color="gray.300">
      <Box as="main">
        <Center>
          <Section>
            <Container maxW="container.md">
              <Box mb={8}>
                <Heading
                  as="h2"
                  size="md"
                  borderBottom="1px"
                  borderColor="gray.700"
                  py={2}
                  mb={6}
                >
                  Experiencia laboral
                </Heading>

                <Box mb={6}>
                  <Box mb={2}>
                    <Heading as="h3" size="sm" display="inline-block">
                      <Link
                        alignItems="end"
                        display="flex"
                        href="https://www.linkedin.com/company/triditive/"
                        isExternal
                        gap="0.2rem"
                      >
                        Triditive S.L
                        <Box fontSize="sm">
                          <BiLinkExternal />
                        </Box>
                      </Link>
                    </Heading>
                    <Heading
                      as="h4"
                      color="gray.500"
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
                    resolución de incidentes relacionados a los sistemas
                    actuales.
                  </Text>

                  <Text fontSize="xs" color="gray.500">
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
                      >
                        Atento S.A
                        <Box fontSize="sm">
                          <BiLinkExternal />
                        </Box>
                      </Link>
                    </Heading>

                    <Heading
                      as="h4"
                      color="gray.500"
                      fontStyle="italic"
                      fontWeight="normal"
                      size="sm"
                    >
                      Representante Soporte Técnico
                    </Heading>
                  </Box>

                  <Text mb={1}>
                    Atención telefónica y remota a usuarios, brindar
                    asesoramiento sobre consultas realizadas por el usuario,
                    resolver incidentes técnicos (hardware y software).
                  </Text>

                  <Text fontSize="xs" color="gray.500">
                    Febrero 2016 — Febrero 2019
                  </Text>
                </Box>
              </Box>

              <Box display="flex" justifyContent="end">
                <NextPageLink href="/projects">Proyectos</NextPageLink>
              </Box>
            </Container>
          </Section>
        </Center>
      </Box>
    </Box>
  );
}
