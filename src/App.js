import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumPage from "./components/AlbumPage.jsx";
import ArtistPage from "./components/ArtistPage";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/artist:artistId" element={<ArtistPage />} />
          <Route path="/album:albumId" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
