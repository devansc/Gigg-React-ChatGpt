import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SongForm = ({ onSubmit, song }) => {
  const navigate = useNavigate();
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');
  const [sectionChords, setSectionChords] = useState('');

  useEffect(() => {
    // Populate form fields with existing data when the song prop changes
    if (song) {
      setSongName(song.songName);
      setArtist(song.artist);
      setSections(song.sections);
    }
  }, [song]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Construct a new song object with updated data
    const updatedSong = {
      id: song ? song.id : Date.now(),
      songName,
      artist,
      sections,
    };
    onSubmit(updatedSong);
    navigate('/songs');
  };

  const handleAddSection = (event) => {
    event.preventDefault();
    const newSection = {
      name: sectionName,
      chords: sectionChords,
    };
    setSections([...sections, newSection]);
    setSectionName('');
    setSectionChords('');
  };

  return (
    <div>
      <h2>{song ? 'Edit Song' : 'Add Song'}</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Song Name:
          <input
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Artist:
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>
        <br />
        <h3>Sections</h3>
        {sections.map((section, index) => (
          <div key={index}>
            <label>
              Section Name:
              <input
                type="text"
                value={section.name}
                onChange={(e) => {
                  const updatedSections = [...sections];
                  updatedSections[index].name = e.target.value;
                  setSections(updatedSections);
                }}
              />
            </label>
            <br />
            <label>
              Section Chords:
              <input
                type="text"
                value={section.chords}
                onChange={(e) => {
                  const updatedSections = [...sections];
                  updatedSections[index].chords = e.target.value;
                  setSections(updatedSections);
                }}
              />
            </label>
            <br />
          </div>
        ))}
        <div>
          <label>
            New Section Name:
            <input
              type="text"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
            />
          </label>
          <br />
          <label>
            New Section Chords:
            <input
              type="text"
              value={sectionChords}
              onChange={(e) => setSectionChords(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleAddSection}>Add Section</button>
        </div>
        <br />
        <button type="submit">{song ? 'Update' : 'Add'} Song</button>
      </form>
    </div>
  );
};

export default SongForm;

