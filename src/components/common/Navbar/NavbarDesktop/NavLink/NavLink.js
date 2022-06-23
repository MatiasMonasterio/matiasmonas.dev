import { useRouter } from "next/router";

import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function NavLink({ href, children }) {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link
        display="inline-block"
        color={router.pathname === href ? "white" : "whiteAlpha.800"}
        _hover={{ textDecor: "none", color: "white" }}
      >
        {children}
      </Link>
    </NextLink>
  );
}
