import React, { useState } from 'react';
import Filter from './Filter';


const App = () => {
  const [movies, setMovies] = useState([
    {
      id : 1,
      title : "Titanic",
      description : "Titanic is a 1997 American epic romance and disaster film directed, written, produced, and co-edited by John Johnson.",
      posterUrl : "/poster/titanic.jpg",
      rating : 8.5

    },

    {
      id : 2,
      title : "Bloodsport",
      description : "A Movie of martial art ",
      posterUrl : "/poster/bloodsport.jpg",
      rating : 9
    },

    {
      id : 3,
      title : "Le sens du devoir",
      description : "A movie of martial art with action",
      posterUrl : "/poster/le sens du devoir.webp",
      rating : 7
    },

    {
      id : 4,
      title : "The croods",
      description : "It's a funny animation movie",
      posterUrl : "/poster/the croods.jpg",
      rating : 9
    }
  ]
);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <Filter movies={movies} onFilter={handleAddMovie} />
    </div>
  );
};

export default App;