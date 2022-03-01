import { Box } from "@chakra-ui/react";

export const Section = ({ children }) => {
  return (
    <Box as="section" my={8} w="100%">
      {children}
    </Box>
  );
};
