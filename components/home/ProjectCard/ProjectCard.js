import { Box, Heading, Text, Link, HStack, Badge } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard(props) {
  const { title, description, topics, repository, website } = props;

  return (
    <Box as="article">
      <Box px={0} w="100%" mb={4}>
        <Heading as="h2" fontSize="lg" color="whiteAlpha.800">
          {title}
        </Heading>

        <Text fontStyle="italic" color="whiteAlpha.500">
          {description}
        </Text>

        {topics.map((topic) => (
          <Badge variant="web" mr={2} cursor="pointer" key={topic}>
            {topic}
          </Badge>
        ))}
      </Box>

      <HStack gap={2} color="gray.50" fontSize="sm">
        {website && (
          <Link
            alignItems="center"
            display="flex"
            gap="0.2rem"
            href={website}
            color="whiteAlpha.500"
            _hover={{ color: "yellow.200" }}
            isExternal
          >
            Website
            <Box fontSize="xs">
              <BiLinkExternal />
            </Box>
          </Link>
        )}

        {repository && (
          <Link
            alignItems="center"
            display="flex"
            color="whiteAlpha.500"
            _hover={{ color: "yellow.200" }}
            gap="0.2rem"
            href={repository}
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
}
