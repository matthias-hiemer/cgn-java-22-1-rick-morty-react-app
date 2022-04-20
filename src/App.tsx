import './App.css';
import GalleryPage from "./pages/GalleryPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Homepage />}/>
                <Route path={"/gallery"} element={<GalleryPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

