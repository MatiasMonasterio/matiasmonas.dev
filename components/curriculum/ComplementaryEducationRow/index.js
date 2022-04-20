import { GridItem, Text, Heading, Grid } from "@chakra-ui/react";

export const ComplementaryEducationRow = ({
  degree,
  institution,
  year,
  content,
}) => {
  return (
    <Grid templateColumns="100px 1fr" gap={4} mb={6}>
      <GridItem>
        <Text fontSize="xs" color="gray.500">
          Título
        </Text>
        <Text fontSize="xs" color="gray.500">
          Institución
        </Text>
        <Text fontSize="xs" color="gray.500">
          Contenido
        </Text>
      </GridItem>

      <GridItem>
        <Heading as="h3" size="xs">
          {degree}
        </Heading>
        <Text fontSize="xs" color="gray.500">
          {institution} - {year}
        </Text>
        <Text fontSize="xs">{content.join(", ")}</Text>
      </GridItem>
    </Grid>
  );
};
