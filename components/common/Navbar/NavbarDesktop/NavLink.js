import { useRouter } from "next/router";

import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export const NavLink = ({ href, children }) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link
        color={router.pathname === href ? "gray.50" : "gray.500"}
        _hover={{ textDecor: "none", color: "gray.300" }}
      >
        {children}
      </Link>
    </NextLink>
  );
};
