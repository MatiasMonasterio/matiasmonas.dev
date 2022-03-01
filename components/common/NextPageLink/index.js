import NextLink from "next/link";

import { Link } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

export const NextPageLink = ({ href, icon = true, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        _hover={{ cursor: "pointer", color: "white" }}
        alignItems="center"
        as="a"
        color="gray.500"
        display="flex"
        gap={2}
        transition="color 0.1s"
      >
        {children} {icon && <BsArrowRight />}
      </Link>
    </NextLink>
  );
};
