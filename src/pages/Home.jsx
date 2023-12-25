import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);

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
    <ul>
      {films.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
