import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDoubleDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms.ts";


export default function PlatformSelected() {
    const { data, error } = usePlatforms();

    if (error) return null;
    return  (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>Platforms</MenuButton>
                <MenuList>
                    {data?.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
                </MenuList>
            </Menu>
        </>
    )
}