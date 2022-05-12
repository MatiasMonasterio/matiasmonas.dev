import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

export default function ExperienceItem({
  company,
  position,
  description,
  start,
  end,
}) {
  return (
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
            {company}
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
          {position}
        </Heading>
      </Box>

      <Text mb={1}>{description}</Text>

      <Text fontSize="xs" color="whiteAlpha.500">
        {start} — {end}
      </Text>
    </Box>
  );
}
