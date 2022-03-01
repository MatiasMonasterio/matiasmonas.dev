// https://dop3ch3f.medium.com/layouts-in-next-js-c5599f9ea298
import { ChakraProvider } from "@chakra-ui/react";

import { Main } from "layouts/Main";
import { Doc } from "layouts/Doc";

const layoutComponents = {
  main: Main,
  doc: Doc,
};

export const layoutTypes = {
  main: "main",
  doc: "doc",
};

export const AppLayout = (props) => {
  const Layout = layoutComponents[props.children.type.layout || "main"];

  return (
    <ChakraProvider>
      <Layout {...props}>{props.children}</Layout>
    </ChakraProvider>
  );
};
