import './CharacterCard.css';
import {Character} from "../model/Character";

type CharacterCardProps = {
    character : Character
}

export default function CharacterCard( { character } : CharacterCardProps ){

    return <div className="character-card">
        <h3 className="character-card__name">{character.name}</h3>
        <img className="character-card__image" src={character.image} alt={character.name}/>
        <div className="character-card__origin">{character.origin.name}</div>
    </div>
}
