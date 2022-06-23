import { Box } from "@chakra-ui/react";

export default function DocLayout({ children }) {
  return (
    <Box bg="gray" pt={10} pb={2} px={2} overflow="auto">
      {children}
    </Box>
  );
}
