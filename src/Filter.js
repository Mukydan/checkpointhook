import React, { useState } from 'react';
import MovieList from './MovieList';

const Filter = ({ movies, onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [noteFilter, setNoteFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNoteFilter(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= noteFilter
    );
  });

  return (
    <div className="filter">
      <input
        type="text"
        value={titleFilter}
        onChange={handleTitleChange}
        placeholder="Rechercher par titre"
      />
      <input
        type="number"
        value={noteFilter}
        onChange={handleNoteChange}
        placeholder="Rechercher par note"
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Filter;