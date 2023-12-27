import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

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
      toast.error(`An error occurred: ${error.message}`, {
        position: 'top-right',
        theme: 'colored',
      });
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
      <h1>Trending today</h1>
      <ul>
        {films.map(({ title, id }) => (
          <li key={id}>
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
