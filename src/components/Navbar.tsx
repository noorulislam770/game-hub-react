import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image height="30px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
