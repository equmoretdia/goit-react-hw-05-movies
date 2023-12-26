import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId') ?? '';
  console.log(movieId);

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
      toast.error(`An error occurred: ${error.message}`, {
        position: 'top-right',
        theme: 'colored',
      });
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

  const handleSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      setSearchParams({});
      return toast.warn('Please enter a search query', {
        position: 'top-right',
        theme: 'colored',
      });
    }

    setSearchQuery(searchInput.trim());
    setSearchInput('');
  };

  const handleInputChange = e => {
    const input = e.target.value;
    const params = input !== '' ? { query: input.trim() } : {};
    setSearchInput(input.toLowerCase());
    setSearchParams(params);
  };

  return (
    <div>
      <h1>pls hide me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInput"
          value={searchInput}
          onChange={handleInputChange}
          autoComplete="off"
          // autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {
          // searchQuery && movies.length > 0 ? (
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{`${movie.title} (${
                movie.year ? movie.year : 'YYYY'
              })`}</Link>
            </li>
          ))
          // ) : (
          //   <p>No movie were found for your query, please try another one!</p>
          // )
          /* toast.warn(
              'No movie were found for your query, please try another one!',
              {
                position: 'top-right',
                theme: 'colored',
              }
          ) */
        }
      </ul>
    </div>
  );
};

export default Movies;
