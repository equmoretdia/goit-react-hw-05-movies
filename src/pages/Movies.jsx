import Search from 'components/Search';
import MovieList from 'components/MovieList';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeadingHidden } from './CommonPageStyles';

const Movies = () => {
  const lastSearchListUnparsed = window.localStorage.getItem('movies');
  const lastSearchListParsed = JSON.parse(lastSearchListUnparsed);

  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(() => {
    return lastSearchListParsed ?? [];
  });

  const location = useLocation();

  async function fetchMovieByKeyword(query) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&api_key=77971c184b7d14036ed9c9196e488377`
      );
      const movieList = await response.json();
      console.log(movieList);
      return movieList;
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  }

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchMovie() {
      const filmList = await fetchMovieByKeyword(searchQuery);
      const films = filmList.results;
      setMovies(
        films &&
          films.map(film => ({
            id: film['id'],
            title: film['title'],
            year: film['release_date'].substring(0, 4),
          }))
      );
    }
    fetchMovie();
  }, [searchQuery]);

  useEffect(() => {
    window.localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  return (
    <>
      <PageHeadingHidden>Search the movie by keyword</PageHeadingHidden>
      <Search onSubmit={setSearchQuery} />
      <MovieList list={movies} state={{ from: location }} />
    </>
  );
};

export default Movies;
