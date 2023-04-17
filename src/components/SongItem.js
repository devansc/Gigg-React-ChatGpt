import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SongItem = ({ song, onEditSong }) => {
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  const handleEditClick = () => {
    // Navigate to SongForm with the selected song's details for editing
    navigate(`/edit/${song.id}`);
  };

  return (
    <li>
      <h3>{song.songName}</h3>
      <p>Artist: {song.artist}</p>
      <p>Sections:</p>
      <ul>
        {song.sections.map((section, index) => (
          <li key={index}>
            <p>Section Name: {section.name}</p>
            <p>Chords: {section.chords}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={() => onEditSong(song.id)}>Delete</button>
      <Link to={`/detail/${song.id}`}>View Detail</Link>
    </li>
  );
};

export default SongItem;
