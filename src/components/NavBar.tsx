import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/red.png'
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
export default function NavBar() {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='50px' />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}