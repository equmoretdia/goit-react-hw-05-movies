import MovieList from 'components/MovieList';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPopularMovies } from 'services/api';
import { PageHeading } from './HomeStyles';

const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();
  console.log(location);

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
