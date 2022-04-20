import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { jsPDF } from "jspdf";

import {
  Box,
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Button,
  Image,
  VisuallyHidden,
} from "@chakra-ui/react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiSitepoint } from "react-icons/si";
import { BiArrowBack, BiLoaderAlt, BiDownload } from "react-icons/bi";

import { Head } from "components/common/Head";
import { Section } from "components/curriculum/Section";
import { SectionTitle } from "components/curriculum/SectionTitle";
import { EducationRow } from "components/curriculum/EducationRow";
import { ExperienceRow } from "components/curriculum/ExperienceRow";
import { ComplementaryEducationRow } from "components/curriculum/ComplementaryEducationRow";

import { layoutTypes } from "layouts/AppLayout";

const profile = {
  name: "Matias M. Monasterio",
  position: "Frontend Developer",
  resume:
    "Soy estudiante de la carrera de Ingeniería en Informática, con gran afán hacia las tecnologías web e interés de ampliar mis conocimientos para crecer a nivel personal como profesional.",
  image:
    "https://media-exp1.licdn.com/dms/image/C4D03AQGYbo7rSg6rtA/profile-displayphoto-shrink_800_800/0/1607717818872?e=1650499200&v=beta&t=swhnf2ZqCjqTNQmTFBV-xZDco26ebE3KvTB_UGeLPMg",
  data: [
    "01 Diciembre de 1995",
    "Buenos Aires, Argentina",
    "(011) 15-34540195",
    "matias_monasterio@outlook.com",
  ],
  langs: [
    { lang: "Español", level: "Nativo" },
    { lang: "Ingles", level: "Intermedio" },
  ],
  skills: [
    { group: "Backend", items: ["NodeJS", "Express", "Python"] },
    { group: "Frontend", items: ["Vue", "Nuxt", "React", "Next"] },
    { group: "Otros", items: ["Git", "Linux", "Apache2"] },
  ],
  education: [
    {
      degree: "Ingeniería en Informática",
      institution: "Universidad Nacional de la Matanza",
      duration: "2014 a Actualidad",
    },
  ],
  workExperiences: [
    {
      company: "Triditive S.L.",
      position: "Fullstack Developer",
      duraction: "Del 01/02/2021 A Actualidad",
      locale: "Asturias, España",
      tasks:
        "Participación en planificación e investigación de nuevos proyectos, desarrollo de productos para gestión de usuarios, resolución de incidentes relacionados a los sistemas actuales.",
      technologies: [
        "Vue",
        "Nuxt",
        "Vuex",
        "Figma",
        "Python",
        "Flask",
        "Linux",
        "Nginx",
        "Apache",
        "Docker",
      ],
    },
    {
      company: "Atento S.A.",
      position: "Representante Soporte Técnico",
      duraction: "Del 12/02/2016 A 01/02/2019",
      locale: "CABA, Bs. As",
      tasks:
        "Atención telefónica y remota a usuarios, brindar asesoramiento sobre consultas realizadas por el usuario, resolver incidentes técnicos (hardware y software).",
    },
    {
      company: "Tech Reparaciones",
      position: "Técnico en Armado y Reparación",
      duraction: "Del 01/11/2012 A 01/07/2014",
      locale: "Moreno, Bs. As",
      tasks:
        "Optimización, mantenimiento y actualización de equipos, instalación de programas software, limpieza de componentes hardware.",
    },
  ],
  complementaryEducation: [
    {
      degree: "Desarrollador ASP.NET Full-Stack",
      institution: "Comunidad IT",
      year: "2020",
      content: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Jquery",
        "C#",
        "ASP.NET Core MVC",
        "Entity Framework",
        " SQL Server",
        "Scrum",
      ],
    },
    {
      degree: "Profesional WebMaster",
      institution: "Universidad Tecnológica Nacional",
      year: "2020",
      content: [
        "HTML",
        "CSS",
        "UX",
        "Sass",
        "JavaScript",
        "AJAX",
        "TypeScript",
        "PWA",
        "MVC",
        "NPM",
        "NodeJs",
        "Express",
        "MySql",
        "Angular",
      ],
    },
  ],
};

export default function Curriculum() {
  const cvElement = useRef(null);

  const router = useRouter();
  const [loadFile, setLoadFile] = useState(false);

  const handleDowload = async () => {
    const { clientHeight, clientWidth } = cvElement.current;
    setLoadFile(true);

    const curriculum = new jsPDF({ format: [clientHeight + 2, clientWidth] });

    curriculum.html(cvElement.current, {
      callback: (doc) => {
        doc.save(`${profile.name} - ${profile.position}.pdf`);
        setLoadFile(false);
      },
    });
  };

  const handleNavigationBack = () => {
    router.push("/");
  };

  return (
    <>
      <Head
        title="Curriculum | Matias M. Monasterio"
        description="Visita y descarga mi Curriculum"
      />

      <AspectRatio
        bg="white"
        maxW="800px"
        minW="800px"
        mx="auto"
        ratio={1 / 1.4142}
        ref={cvElement}
      >
        <Box>
          <Grid
            templateColumns="250px 1fr"
            w="100%"
            h="100%"
            position="relative"
          >
            <Box position="absolute" w="100%" bg="#ededed" top="3.5rem">
              <Grid
                templateColumns="250px 1fr"
                w="100%"
                h="100%"
                position="relative"
                py={6}
              >
                <GridItem px={6} position="relative">
                  <Image
                    borderRadius="full"
                    boxSize="180px"
                    loading="lazy"
                    width="180px"
                    height="180px"
                    src={profile.image}
                    alt={profile.name}
                    position="absolute"
                    top="-70%"
                    border="1px"
                    borderColor="gray.200"
                  />
                </GridItem>
                <GridItem px={8}>
                  <Heading as="h1">{profile.name}</Heading>
                  <Text fontSize="lg" fontStyle="italic" color="blackAlpha.700">
                    {profile.position}
                  </Text>
                </GridItem>
              </Grid>
            </Box>

            <GridItem bg="blackAlpha.900" color="whiteAlpha.700" px={6} pt={64}>
              <Section>
                <SectionTitle
                  backgroundColor="#141414"
                  color="whiteAlpha.900"
                  lineColor="whiteAlpha.400"
                >
                  Datos
                </SectionTitle>

                {profile.data.map((content) => (
                  <Text fontSize="xs" key={content}>
                    {content}
                  </Text>
                ))}
              </Section>

              <Section>
                <SectionTitle
                  backgroundColor="#141414"
                  color="whiteAlpha.900"
                  lineColor="whiteAlpha.400"
                >
                  Idiomas
                </SectionTitle>

                {profile.langs.map(({ lang, level }) => (
                  <Text fontSize="xs" key={lang}>
                    {lang}: {level}
                  </Text>
                ))}
              </Section>

              <Section>
                <SectionTitle
                  backgroundColor="#141414"
                  color="whiteAlpha.900"
                  lineColor="whiteAlpha.400"
                >
                  Skills
                </SectionTitle>

                {profile.skills.map(({ group, items }) => (
                  <Box mb={4} key={group}>
                    <Heading as="h3" size="xs" color="whiteAlpha.800">
                      {group}
                    </Heading>
                    <UnorderedList styleType="none" size="xs" ml={0}>
                      {items.map((item) => (
                        <ListItem fontSize="xs" key={item}>
                          {item}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                ))}
              </Section>

              <Section>
                <SectionTitle
                  backgroundColor="#141414"
                  color="whiteAlpha.900"
                  lineColor="whiteAlpha.400"
                >
                  Links
                </SectionTitle>

                <Link
                  _hover={{ color: "yellow.200" }}
                  href="mailto:matias_monasterio@outlook.com"
                  display="flex"
                  alignItems="center"
                  color="whiteAlpha.800"
                  mb={2}
                >
                  <Box as="span" pr={2}>
                    <SiSitepoint />
                  </Box>
                  <Box as="span" fontSize="sm">
                    www.matiasmonas.dev
                  </Box>
                </Link>

                <Link
                  _hover={{ color: "yellow.200" }}
                  alignItems="center"
                  display="flex"
                  href="https://github.com/MatiasMonasterio"
                  color="whiteAlpha.800"
                  isExternal
                  mb={2}
                >
                  <Box as="span" pr={2}>
                    <BsGithub />
                  </Box>
                  <Box as="span" fontSize="sm">
                    /MatiasMonasterio
                  </Box>
                </Link>

                <Link
                  _hover={{ color: "yellow.200" }}
                  alignItems="center"
                  display="flex"
                  href="https://www.linkedin.com/in/matiasmonasterio/"
                  color="whiteAlpha.800"
                  isExternal
                >
                  <Box as="span" pr={2}>
                    <BsLinkedin />
                  </Box>
                  <Box as="span" fontSize="sm">
                    /MatiasMonasterio
                  </Box>
                </Link>
              </Section>
            </GridItem>

            <GridItem px={8} pt={48} mt={2}>
              <Section>
                <SectionTitle
                  color="gray.800"
                  backgroundColor="white"
                  lineColor="gray.900"
                >
                  Perfil Personal
                </SectionTitle>

                <Text fontSize="sm">{profile.resume}</Text>
              </Section>

              <Section>
                <SectionTitle
                  color="gray.800"
                  backgroundColor="white"
                  lineColor="gray.900"
                >
                  Educación
                </SectionTitle>

                {profile.education.map((education) => (
                  <EducationRow {...education} key={education.institution} />
                ))}
              </Section>

              <Section>
                <SectionTitle
                  color="gray.800"
                  backgroundColor="white"
                  lineColor="gray.900"
                >
                  Experiencia Profesional
                </SectionTitle>

                {profile.workExperiences.map((work) => (
                  <ExperienceRow {...work} key={work.company} />
                ))}
              </Section>

              <Section>
                <SectionTitle
                  color="gray.800"
                  backgroundColor="white"
                  lineColor="gray.900"
                >
                  Formación Complementaria
                </SectionTitle>

                {profile.complementaryEducation.map((education) => (
                  <ComplementaryEducationRow
                    {...education}
                    key={education.institution}
                  />
                ))}
              </Section>
            </GridItem>
          </Grid>
        </Box>
      </AspectRatio>

      <Button
        bottom="1em"
        color="gray.100"
        backgroundColor="blackAlpha.600"
        _hover={{ backgroundColor: "blackAlpha.800" }}
        _active={{ backgroundColor: "blackAlpha.800" }}
        _disabled={{ backgroundColor: "blackAlpha.900" }}
        disabled={loadFile}
        leftIcon={loadFile ? <BiLoaderAlt /> : <BiDownload />}
        onClick={handleDowload}
        position="fixed"
        right="1em"
        size="lg"
      >
        Descargar
      </Button>

      <Button
        left="1em"
        onClick={handleNavigationBack}
        position="fixed"
        size="md"
        top="1em"
      >
        <BiArrowBack />
        <VisuallyHidden>Volver</VisuallyHidden>
      </Button>
    </>
  );
}

Curriculum.layout = layoutTypes.doc;
