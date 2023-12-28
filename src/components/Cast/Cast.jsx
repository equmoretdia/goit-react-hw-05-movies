import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActorsList, Actor, ActorPhoto, ActorInfo } from './CastStyles';

import defaultAvatar from 'img/avatar.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  async function fetchMovieCredits(id) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=77971c184b7d14036ed9c9196e488377`
      );
      const movieCredits = await response.json();
      // console.log(movieCredits);
      return movieCredits;
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  }

  useEffect(() => {
    async function fetchCredits() {
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
    fetchCredits();
  }, [movieId]);

  return (
    <ActorsList>
      {cast &&
        cast.map(actor => (
          <Actor key={actor['id']}>
            <ActorPhoto
              src={
                actor['image']
                  ? `https://image.tmdb.org/t/p/w200/${actor['image']}`
                  : defaultAvatar
              }
              alt="actor's photo"
            />
            <ActorInfo>Actor: {actor['name']}</ActorInfo>
            <ActorInfo>Character: {actor['character']}</ActorInfo>
          </Actor>
        ))}
    </ActorsList>
  );
};

export default Cast;
