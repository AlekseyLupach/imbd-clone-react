import { useState } from 'react';

import SearchInput from './SearchInput'
import MovieDetails from './MovieDetails'
import useRequest from './use-request';


function App() {
  const [{ data: movie, isLoading, isError }, doFetch] = useRequest();

  const handleMovieChange = async (movie) => {
    if (!movie) {
      return;
    }

    const { imdbID } = movie;

    doFetch(`https://www.omdbapi.com/?i=${imdbID}&apiKey=656f5a25`);
  };

  return (
    <div>
      <SearchInput onChange={handleMovieChange} />

      {movie && <MovieDetails details={movie} />}

      {isLoading && 'Loading...'}

      {isError && 'Something went wrong...'}
    </div>
  )
}

export default App;
