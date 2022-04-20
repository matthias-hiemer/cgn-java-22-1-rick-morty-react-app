import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import CharacterCardDetail from "../components/CharacterCardDetail";

export default function CharacterDetailsPage() {

    const [character, setCharacter] = useState<Character>()
    const params = useParams()
    const id = params.id

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/" + id)
            .then(response => response.data)
            .then(data => setCharacter(data))
            .catch(console.error)
    }, [])

    return (
        <div>
            {character && <CharacterCardDetail character={character} />}
        </div>

    )
}
