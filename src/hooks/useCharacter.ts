import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import axios from "axios";


export default function useCharacter(id : string | undefined){

    const [character, setCharacter] = useState<Character>()

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/" + id)
            .then(response => response.data)
            .then(data => setCharacter(data))
            .catch(console.error)
    }, [id])

    return character
}
