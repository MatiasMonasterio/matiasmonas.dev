import { Box } from "@chakra-ui/react";

export const Doc = ({ children }) => {
  return (
    <Box bg="gray" pt={10} pb={2} px={2} overflow="auto">
      {children}
    </Box>
  );
};
