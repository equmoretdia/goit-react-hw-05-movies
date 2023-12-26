import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  async function fetchMovieCredits(id) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=77971c184b7d14036ed9c9196e488377`
      );
      const movieCredits = await response.json();
      console.log(movieCredits);
      return movieCredits;
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const filmCredits = await fetchMovieCredits(movieId);
      const filmCast = filmCredits.cast;
      setCast(
        filmCast &&
          filmCast.map(actor => ({
            id: actor['id'],
            name: actor['name'],
            character: actor['character'],
            image: actor['profile_path'],
          }))
      );
    }
    fetchMovie();
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(actor => (
          <li key={actor['id']}>
            {actor['image'] && actor['image'] ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor['image']}`}
                alt={`${actor['name']}`}
              />
            ) : (
              "Actor's image"
            )}
            <p>Actor: {actor['name']}</p>
            <p>Character: {actor['character']}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
