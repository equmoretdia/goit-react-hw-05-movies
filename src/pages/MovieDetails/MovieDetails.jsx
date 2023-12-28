import Placeholder from 'img/placeholder.jpg';

import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieOptions, optionsAPI } from 'services/api';
import {
  Heading,
  Button,
  GoBack,
  Wrapper,
  Poster,
  Details,
  Title,
  Overview,
  Genres,
  Genre,
  Text,
  AdditionalInfo,
  List,
  Item,
  LinkTo,
} from './MovieDetailsStyles';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const MovieDetails = () => {
  const [{ title, year, score, image, overview, genres }, setFilm] = useState({
    title: null,
    year: null,
    score: null,
    image: null,
    overview: null,
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

  console.log(genres);

  return (
    <>
      <Heading>Chosen movie details</Heading>
      <Button>
        <FaLongArrowAltLeft />
        <GoBack to={backLinkLocationRef.current}>Go back</GoBack>
      </Button>
      <Wrapper>
        <Poster
          src={image ? `https://image.tmdb.org/t/p/w300/${image}` : Placeholder}
          alt="film poster"
        />
        <Details>
          <Title>
            {title} {year ? `(${year})` : ''}
          </Title>
          {/* <Text>{`User Score: ${score}%`}</Text> */}
          <Text>
            {score
              ? `User Score: ${score}%`
              : 'User Score: No information available '}
          </Text>
          <Overview>Overview</Overview>
          <Text>{overview ? overview : 'No information available '}</Text>
          <Genres>Genres</Genres>
          <ul>
            {genres.length > 0 ? (
              genres.map(genre => <Genre key={genre.id}>{genre.name}</Genre>)
            ) : (
              <p>No information available</p>
            )}
          </ul>
        </Details>
      </Wrapper>
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
