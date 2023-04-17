import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songs, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Song List</h2>
      {songs.map((song, index) => (
        <SongItem
          key={index}
          index={index}
          song={song}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default SongList;
