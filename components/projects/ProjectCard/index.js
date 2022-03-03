import { Box, Heading, Text, Link, HStack } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

export const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  website,
}) => {
  return (
    <Box as="article">
      <Box px={0} w="100%" mb={4}>
        <Heading as="h2" fontSize="lg">
          {title}
        </Heading>

        <Text fontStyle="italic" color="gray.500">
          {description}
        </Text>

        <Text fontSize="sm">{technologies.join(", ")}</Text>
      </Box>

      <HStack gap={2} color="gray.50" fontSize="sm">
        {website && (
          <Link
            alignItems="center"
            display="flex"
            gap="0.2rem"
            href={website}
            color="gray.500"
            _hover={{ color: "gray.100" }}
            isExternal
          >
            Website
            <Box fontSize="xs">
              <BiLinkExternal />
            </Box>
          </Link>
        )}

        {github && (
          <Link
            alignItems="center"
            display="flex"
            color="gray.500"
            _hover={{ color: "gray.100" }}
            gap="0.2rem"
            href={github}
            isExternal
          >
            GitHub
            <Box fontSize="xs">
              <BiLinkExternal />
            </Box>
          </Link>
        )}
      </HStack>
    </Box>
  );
};
