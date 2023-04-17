import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SongList from "./components/SongList";
import SongForm from "./components/SongForm";
import SongDetail from "./components/SongDetail";

const App = () => {
  const [songs, setSongs] = useState([]);

  // Function to add a new song to the songs list
  const onAddSong = (newSong) => {
    setSongs([...songs, newSong]);
  };

  // Function to update an existing song in the songs list
  const onUpdateSong = (updatedSong) => {
    setSongs(
      songs.map((song) => (song.id === updatedSong.id ? updatedSong : song))
    );
  };

  // Function to delete a song from the songs list
  const onDeleteSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Song List</Link>
          </li>
          <li>
            <Link to="/add">Add Song</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <SongList
              songs={songs}
              onDeleteSong={onDeleteSong}
              onAddSongLink="/add"
            />
          }
        />
        <Route
          path="/add"
          element={<SongForm onSubmit={onAddSong} isEditing={true} />}
        />
        <Route
          path="/edit/:id"
          element={<SongForm onSubmit={onUpdateSong} isEditing={true} />}
        />
        <Route
          path="/detail/:id"
          element={<SongDetail songs={songs} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

