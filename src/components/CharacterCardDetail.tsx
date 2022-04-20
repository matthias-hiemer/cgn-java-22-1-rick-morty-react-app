import './CharacterCardDetail.css';
import {Character} from "../model/Character";

type CharacterCardDetailProps = {
    character : Character
}

export default function CharacterCardDetail( { character } : CharacterCardDetailProps ){

    return <div className="character-details" >
        <div className="character-card" >
            <h3 className="character-card__name">Name: {character.name}</h3>
            <img className="character-card__image" src={character.image} alt={character.name}/>
            <div>Origin: {character.origin.name}</div>
            <div>Species: {character.species}</div>
            <div>Gender: {character.gender}</div>
            <div>Status: {character.status}</div>
        </div>
    </div>
}
