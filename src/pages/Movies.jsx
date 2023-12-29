import MoviesSearch from 'components/MoviesSearch';
import MovieList from 'components/MovieList';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieByKeyword } from 'services/api';
import { PageHeadingHidden } from './CommonPageStyles';

const Movies = () => {
  const lastSearchListUnparsed = window.localStorage.getItem('movies');
  const lastSearchListParsed = JSON.parse(lastSearchListUnparsed);

  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(() => {
    return lastSearchListParsed ?? [];
  });

  const location = useLocation();

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
      <MoviesSearch onSubmit={setSearchQuery} />
      {movies.length > 0 ? (
        <MovieList list={movies} state={{ from: location }} />
      ) : (
        <p>
          Sorry, no pictures were found for your query, please try another one!
        </p>
      )}
    </>
  );
};

export default Movies;
