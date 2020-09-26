import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div>
          <h3>Movie: {movie.title}</h3>
          <span>Time: {movie.time} minutes</span>
          <ul>
            Genre {movie.genres.map(genre => 
              <li>{genre}</li>)}
          </ul>
        </div>
      ))}
     </div>
  );
};

export default Movies;
