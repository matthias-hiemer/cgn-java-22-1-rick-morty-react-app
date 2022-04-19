import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import Header from "./components/Header";
import {ChangeEvent, useEffect, useState} from "react";
import ActionBar from "./components/ActionBar";
import {Character} from "./model/Character";
import {fetchCharacters} from "./services/RickAndMortyApiService";

export default function App() {

  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getCharactersFromApi()
  }, [])

  const getCharactersFromApi = () => {
    fetchCharacters("https://rickandmortyapi.com/api/character")
        .then(response => {
          setCharacters(response.results)
        })
        .catch(error => console.log(error))
  }

  const [searchText, setSearchText] = useState<string>("")

  const filteredCharacters = characters.filter(character => character.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  return (
    <div className="App">

      <Header />

      <ActionBar searchText={searchText} onSearchInputChange={onSearchInputChange}/>

      <CharacterGallery characters={filteredCharacters} />

    </div>
  );
}

