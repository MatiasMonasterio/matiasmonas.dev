import { VisuallyHidden } from "@chakra-ui/react";

import { Logo } from "src/components/common";
import NavLink from "../NavLink";

export default function HomeLink() {
  return (
    <NavLink href="/">
      <Logo size={40} />
      <VisuallyHidden>Home</VisuallyHidden>
    </NavLink>
  );
}
