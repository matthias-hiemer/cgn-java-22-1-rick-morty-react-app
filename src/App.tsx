import './App.css';
import GalleryPage from "./pages/GalleryPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import CharacterDetailsPage from './pages/CharacterDetailsPage';
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
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Homepage />}/>
                <Route path={"/gallery"} element={<GalleryPage characters={characters}/>}/>
                <Route path={"/character/:id"} element={<CharacterDetailsPage characters={characters}/>} />
            </Routes>
        </BrowserRouter>
    )
}

