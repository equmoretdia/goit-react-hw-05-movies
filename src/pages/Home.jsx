import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Heading, PopularMovies, PopularMovie, MovieLink } from './HomeStyles';

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
      <Heading>Trending today</Heading>
      <PopularMovies>
        {films.map(({ title, id }) => (
          <PopularMovie key={id}>
            <MovieLink key={id} to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </PopularMovie>
        ))}
      </PopularMovies>
    </>
  );
};

export default Home;
