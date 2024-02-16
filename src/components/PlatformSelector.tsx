import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatfroms from "../hooks/usePlatforms";
import { Platfrom } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platfrom) => void;
}
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatfroms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
