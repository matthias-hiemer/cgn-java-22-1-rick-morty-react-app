import {useNavigate, useParams} from "react-router-dom";
import {Character} from "../model/Character";

export type CharacterDetailsPageProps = {
    characters: Character[]
}

export default function CharacterDetailsPage({characters}: CharacterDetailsPageProps) {

    const navigate = useNavigate()
    const params = useParams()
    const id = params.id

    if (id === undefined) {
        navigate("/")
        return (<></>);
    }

    const character = characters.find(character => character.id === parseInt(id))

    if (character === undefined) {
        return (<>Character not found!</>)
    }

    return (
        <>Character {character.name}</>
    )
}
