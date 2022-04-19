
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import Header from "./components/Header";
import {useEffect, useState} from "react";
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

  return (
    <div className="App">

      <Header />

      <CharacterGallery characters={characters} />

    </div>
  );
}

