import './CharacterGallery.css';
import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import {ChangeEvent, useState} from "react";


type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery({characters}: CharacterGalleryProps) {

    const [searchText, setSearchText] = useState<string>("")

    const filteredCharacters = characters.filter(character => character.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

    const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    return (<>
        <div className={"character-gallery__action-bar"}>
            <input className={"character-gallery__search-input"} placeholder={"Search"} value={searchText}
                   onChange={onSearchInputChange}/>
        </div>
        <div className="character-gallery__gallery">
            {filteredCharacters.length
                ? filteredCharacters.map((char) => <CharacterCard key={char.id} character={char}/>)
                : <div className={"character-gallery__error-text"}>No Characters found!</div>
            }
        </div>
    </>)
}
