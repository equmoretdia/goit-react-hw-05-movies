import GoBackButton from 'components/GoBackButton';
import MovieOverview from 'components/MovieOverview';
import MovieAdditionalInfo from 'components/MovieAdditionalInfo';

import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieOptions, optionsAPI } from 'services/api';
import { PageHeadingHidden } from './CommonPageStyles';

const MovieDetails = () => {
  const [film, setFilm] = useState({
    title: '',
    year: '',
    score: 0,
    image: '',
    overview: '',
    genres: [],
  });

  const location = useLocation();
  // console.log(location);

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log(backLinkLocationRef.current);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const filmDetails = await fetchMovieOptions(optionsAPI.movie, movieId);
      const percentageScore = Math.round(filmDetails['vote_average'] * 10, 0);
      setFilm({
        title: filmDetails['title'],
        year: filmDetails['release_date'].substring(0, 4),
        score: percentageScore,
        image: filmDetails['poster_path'],
        overview: filmDetails['overview'],
        genres: filmDetails['genres'],
      });
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <PageHeadingHidden>Chosen movie details</PageHeadingHidden>
      <GoBackButton path={backLinkLocationRef.current} />
      <MovieOverview movie={film} />
      <MovieAdditionalInfo />
      <Outlet />
    </>
  );
};

export default MovieDetails;
