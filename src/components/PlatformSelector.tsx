import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDoubleDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../hooks/useGames.ts";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
export default function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
    const { data, error } = usePlatforms();

    if (error) return null;
    return  (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
                <MenuList>
                    {data?.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
                </MenuList>
            </Menu>
        </>
    )
}