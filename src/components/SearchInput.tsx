import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";


export default function SearchInput() {

    return (
        <>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input borderRadius={20} placeholder={'Search games...'} variant={'filled'}/>

            </InputGroup>
        </>
    )
}