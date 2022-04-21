import { Box, Heading, Text, Link, HStack, Badge } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard(props) {
  const { title, description, technologies, github, website } = props;

  return (
    <Box as="article">
      <Box px={0} w="100%" mb={4}>
        <Heading as="h2" fontSize="lg" color="whiteAlpha.800">
          {title}
        </Heading>

        <Text fontStyle="italic" color="whiteAlpha.500">
          {description}
        </Text>

        {technologies.map((technology) => (
          <Badge
            key={technology}
            mr={2}
            textTransform="initial"
            bg="rgba(250, 240, 137, 0.1)"
            fontSize="xs"
            color="yellow.50"
            cursor="pointer"
            rounded="lg"
            px={2}
            transition="background .05s, color .05s"
            _hover={{ bg: "yellow.200", color: "blackAlpha.900" }}
          >
            {technology}
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

        {github && (
          <Link
            alignItems="center"
            display="flex"
            color="whiteAlpha.500"
            _hover={{ color: "yellow.200" }}
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
}
