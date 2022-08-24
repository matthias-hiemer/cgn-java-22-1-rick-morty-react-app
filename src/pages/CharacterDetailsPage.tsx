import {useParams} from "react-router-dom";
import CharacterCardDetail from "../components/CharacterCardDetail";
import useCharacter from "../hooks/useCharacter";

export default function CharacterDetailsPage() {

    const params = useParams()
    const id = params.id

    const character = useCharacter(id);

    return (
        <div>
            {character && <CharacterCardDetail character={character} />}
        </div>

    )
}
