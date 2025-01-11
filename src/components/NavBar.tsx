import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/red.png'
import ColorModeSwitch from "./ColorModeSwitch.tsx";
export default function NavBar() {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='50px' />
            <ColorModeSwitch />
        </HStack>
    )
}