import { useRouter } from "next/router";

import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export const NavLink = ({ href, children }) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link
        display="block"
        _hover={{ textDecoration: "none" }}
        color={router.pathname === href && "blackAlpha.600"}
      >
        {children}
      </Link>
    </NextLink>
  );
};
