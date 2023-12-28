import MovieOverview from 'components/MovieOverview';

import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieOptions, optionsAPI } from 'services/api';
import {
  Heading,
  Button,
  GoBack,
  Text,
  AdditionalInfo,
  List,
  Item,
  LinkTo,
} from './MovieDetailsStyles';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const MovieDetails = () => {
  const [film, setFilm] = useState({
    title: '',
    year: '',
    score: null,
    image: '',
    overview: '',
    genres: [],
  });

  const location = useLocation();
  console.log(location);

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log(backLinkLocationRef);

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
      <Heading>Chosen movie details</Heading>
      <Button>
        <FaLongArrowAltLeft />
        <GoBack to={backLinkLocationRef.current}>Go back</GoBack>
      </Button>
      <MovieOverview movie={film} />
      <AdditionalInfo>
        <Text>Additional information:</Text>
        <List>
          <Item>
            <LinkTo to="cast">Cast</LinkTo>
          </Item>
          <Item>
            <LinkTo to="reviews">Reviews</LinkTo>
          </Item>
        </List>
      </AdditionalInfo>
      <Outlet />
    </>
  );
};

export default MovieDetails;
