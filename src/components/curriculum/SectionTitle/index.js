import { Heading, Box } from "@chakra-ui/react";

export const SectionTitle = ({
  color,
  backgroundColor,
  lineColor,
  children,
}) => {
  return (
    <Heading
      as="h2"
      size="sm"
      textAlign="center"
      textTransform="uppercase"
      mb={4}
      position="relative"
      _after={{
        content: '""',
        height: "1px",
        width: "100%",
        position: "absolute",
        top: "50%",
        bottom: "50%",
        display: "block",
        backgroundColor: lineColor,
        zIndex: "0",
      }}
    >
      <Box
        as="span"
        backgroundColor={backgroundColor}
        color={color}
        mx="auto"
        position="relative"
        zIndex={1}
        px={4}
      >
        {children}
      </Box>
    </Heading>
  );
};
