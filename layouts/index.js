// https://dop3ch3f.medium.com/layouts-in-next-js-c5599f9ea298
import { ChakraProvider } from "@chakra-ui/react";

import MainLayout from "./MainLayout";
import DocLayout from "./DocLayout";

import theme from "theme";

const layoutComponents = {
  main: MainLayout,
  doc: DocLayout,
};

export const layoutTypes = {
  main: "main",
  doc: "doc",
};

export default function AppLayout(props) {
  const Layout = layoutComponents[props.children.type.layout || "main"];

  return (
    <ChakraProvider theme={theme}>
      <Layout {...props}>{props.children}</Layout>
    </ChakraProvider>
  );
}
