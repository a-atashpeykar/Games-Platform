import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imageUrl.ts";

export default function GenreList() {
    const {data} = useGenres();
    return (
        <>
            <List>
                {data.map((genre) =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                            <Text fontSize='lg'>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                )}
            </List>
        </>
    )
}