import defaultAvatar from 'img/avatar.jpg';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieOptions, optionsAPI } from 'services/api';
import { ActorsList, Actor, ActorPhoto, ActorInfo, Sorry } from './CastStyles';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCredits() {
      const filmCredits = await fetchMovieOptions(optionsAPI.cast, movieId);
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
      {cast.length > 0 ? (
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
        ))
      ) : (
        <Sorry>We don't have any cast information for this movie.</Sorry>
      )}
    </ActorsList>
  );
};

export default Cast;
