import { Box } from "@chakra-ui/react";

export const Section = (props) => {
  return (
    <Box mb={10} {...props} as="section">
      {props.children}
    </Box>
  );
};
