import { Box } from "@chakra-ui/react";
import NavLink from "../NavLink";

export default function CvLink() {
  return (
    <NavLink href="/curriculum">
      <Box
        as="span"
        color="whiteAlpha.900"
        border="1px solid"
        rounded="md"
        px="0.55rem"
        py="0.55rem"
        fontWeight="500"
        borderColor="yellow.200"
        transition="all 0.25s"
        _hover={{
          bg: "yellow.200",
          color: "blackAlpha.900",
        }}
      >
        CV
      </Box>
    </NavLink>
  );
}
