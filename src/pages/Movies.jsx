import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const searchQuery = 'batman';

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

  return (
    <div>
      {/* <h1>pls hide me</h1>
      <input type="text" value={dogId} onChange={updateQueryString} />
      <button onClick={() => setSearchParams({ a: 5, b: 10, c: 'hello' })}>
        Change searchParams
      </button> */}
      <ul>
        {movies.length > 0 ? (
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
              >{`${movie.title} (${movie.year})`}</Link>
            </li>
          ))
        ) : (
          <p>No movie were found for your query, please try another one!</p>
        )}
      </ul>
    </div>
  );
};

export default Movies;
