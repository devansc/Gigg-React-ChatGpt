import React from "react";
import { useParams, Link } from "react-router-dom";

const SongDetail = ({ songs }) => {
  // Get the song ID from URL params
  const { id } = useParams();

  // Find the song with matching ID in the songs array
  const song = songs.find((song) => song.id === id);

  // Render the song details
  return (
    <div>
      <h2>Song Detail</h2>
      {song ? (
        <div>
          <p>Song Name: {song.name}</p>
          <p>Artist: {song.artist}</p>
          <p>Sections:</p>
          <ul>
            {song.sections.map((section, index) => (
              <li key={index}>
                <strong>Name:</strong> {section.name},{" "}
                <strong>Chords:</strong> {section.chords}
              </li>
            ))}
          </ul>
          <Link to={`/edit/${id}`}>Edit</Link>
        </div>
      ) : (
        <p>Song not found</p>
      )}
    </div>
  );
};

export default SongDetail;

