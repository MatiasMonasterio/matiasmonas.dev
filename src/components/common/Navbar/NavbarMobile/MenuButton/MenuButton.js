import { Button, VisuallyHidden } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export default function MenuButton({ active, onClick }) {
  return (
    <Button
      fontSize="2rem"
      variant="link"
      ml="auto"
      position="relative"
      color={active ? "blackAlpha.900" : "whiteAlpha.900"}
      px={0}
      zIndex={2}
      onClick={onClick}
      transition="color .2s"
    >
      {active ? <IoMdClose /> : <BiMenuAltRight />}
      <VisuallyHidden>Menu</VisuallyHidden>
    </Button>
  );
}
