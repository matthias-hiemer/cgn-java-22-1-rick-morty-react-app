import {ChangeEvent, useEffect, useState} from "react";
import {Character} from "../model/Character";
import {fetchCharacters} from "../services/RickAndMortyApiService";
import ActionBar from "../components/ActionBar";
import CharacterGallery from "../components/CharacterGallery";

export type GalleryPageProps = {
    characters: Character[]
}

export default function GalleryPage({characters} : GalleryPageProps) {
    const [searchText, setSearchText] = useState<string>("")

    const filteredCharacters = characters.filter(character => character.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

    const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    return (
        <div className="App">

            <ActionBar searchText={searchText} onSearchInputChange={onSearchInputChange}/>

            <CharacterGallery characters={filteredCharacters}/>

        </div>
    );
}
