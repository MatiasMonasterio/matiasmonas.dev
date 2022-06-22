import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      ":root": {
        colorScheme: "dark",
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  colors: {
    brand: {
      ...theme.colors.yellow,
    },
    primary: {
      ...theme.colors.yellow,
    },
  },
  components: {
    Badge: {
      baseStyle: {
        fontSize: "xs",
        px: 2,
        rounded: "lg",
        textTransform: "initial",
        transition: "background .05s, color .05s",
      },
      variants: {
        web: () => ({
          backgroundColor: "rgba(250, 240, 137, 0.1)",
          color: "yellow.50",
          _hover: { bg: "yellow.200", color: "blackAlpha.900" },
        }),
      },
    },
  },
});
