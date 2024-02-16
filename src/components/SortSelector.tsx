import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>Date </MenuItem>
        <MenuItem>Newest </MenuItem>
        <MenuItem>Rating</MenuItem>
        <MenuItem>Size </MenuItem>
        <MenuItem>Offline </MenuItem>
        <MenuItem>Multiplayer</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
