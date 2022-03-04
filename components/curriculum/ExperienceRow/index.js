import { GridItem, Text, Heading, Grid } from "@chakra-ui/react";

export const ExperienceRow = ({
  duraction,
  locale,
  company,
  position,
  tasks,
  technologies,
}) => {
  return (
    <Grid templateColumns="100px 1fr" gap={4} mb={6}>
      <GridItem>
        <Text fontSize="xs" color="gray.400">
          {duraction}
        </Text>

        <Text fontSize="xs" color="gray.400">
          {locale}
        </Text>
      </GridItem>

      <GridItem>
        <Heading as="h3" size="xs">
          {company}
        </Heading>

        <Text fontSize="xs" color="gray.500">
          {position}
        </Text>

        <Text fontSize="xs">{tasks}</Text>

        {!!technologies && (
          <Text fontSize="xs" fontWeight="bold">
            {technologies.join(", ")}
          </Text>
        )}
      </GridItem>
    </Grid>
  );
};
