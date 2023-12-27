import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const lastSearchListUnparsed = window.localStorage.getItem('movies');
  const lastSearchListParsed = JSON.parse(lastSearchListUnparsed);
  const [movies, setMovies] = useState(() => {
    return lastSearchListParsed ?? [];
  });

  const location = useLocation();
  // console.log(location);

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

  const handleSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      setSearchParams({});
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
      <h1>Search the movie by keyword</h1>
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
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >{`${movie.title} (${movie.year ? movie.year : 'YYYY'})`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
