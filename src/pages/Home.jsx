import MovieList from 'components/MovieList';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeading } from './CommonPageStyles';

const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();
  console.log(location);

  async function fetchPopularMovies() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=77971c184b7d14036ed9c9196e488377`
      );
      const popularMovies = await response.json();
      // console.log(popularMovies.results);
      return popularMovies.results;
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      const filmList = await fetchPopularMovies();
      setFilms(filmList);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <PageHeading>Trending today</PageHeading>
      <MovieList list={films} state={{ from: location }} />
    </>
  );
};

export default Home;
