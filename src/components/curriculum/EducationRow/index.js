import { GridItem, Text, Heading, Grid } from "@chakra-ui/react";

export const EducationRow = ({ degree, institution, duration }) => {
  return (
    <Grid templateColumns="100px 1fr" gap={4} mb={6}>
      <GridItem>
        <Text fontSize="xs" color="gray.500">
          Título
        </Text>
        <Text fontSize="xs" color="gray.500">
          Institución
        </Text>
      </GridItem>

      <GridItem>
        <Heading as="h3" size="sm">
          {degree}
        </Heading>

        <Text fontSize="xs" color="gray.500">
          {institution}
        </Text>

        <Text fontSize="xs">{duration}</Text>
      </GridItem>
    </Grid>
  );
};
