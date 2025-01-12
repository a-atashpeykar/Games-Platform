import useGenres from "../hooks/useGenres.ts";

export default function GenreList() {
    const { data } = useGenres();
    return (
        <>
            <ul>
                {data.map((genre) => <li key={genre.id}>{genre.name}</li>)}
            </ul>
        </>
    )
}