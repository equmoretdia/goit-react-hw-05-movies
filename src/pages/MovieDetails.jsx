import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [{ title, year, score, image, overview, genres }, setFilm] = useState({
    title: null,
    year: null,
    score: null,
    image: null,
    overview: null,
    genres: null,
  });
  const { movieId } = useParams();

  async function fetchMovieById(id) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=77971c184b7d14036ed9c9196e488377`
      );
      const MovieDetails = await response.json();
      console.log(MovieDetails);
      return MovieDetails;
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const filmDetails = await fetchMovieById(movieId);
      setFilm({
        title: filmDetails.title,
        year: filmDetails['release_date'].substring(0, 4),
        score: Math.round(filmDetails['vote_average'] * 10, 0),
        image: filmDetails['poster_path'],
        overview: filmDetails.overview,
        genres: filmDetails.genres,
      });
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <h1>pls hide me</h1>
      <button>Go back</button>
      <div>
        {image && (
          <img
            src={`https://image.tmdb.org/t/p/w300/${image}`}
            alt="film poster"
          />
        )}
        <div>
          <h2>{`${title}(${year})`}</h2>
          <p>{`User Score: ${score}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
