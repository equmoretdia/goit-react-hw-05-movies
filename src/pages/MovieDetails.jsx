import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
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
} from './MovieDetailsStyles';
import { List, Item, LinkTo } from './CommonPageStyles';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const MovieDetails = () => {
  const [{ title, year, score, image, overview, genres }, setFilm] = useState({
    title: null,
    year: null,
    score: null,
    image: null,
    overview: null,
    genres: null,
  });

  const location = useLocation();
  console.log(location);

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log(backLinkLocationRef);

  const { movieId } = useParams();

  async function fetchMovieById(id) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=77971c184b7d14036ed9c9196e488377`
      );
      const movieDetails = await response.json();
      // console.log(movieDetails);
      return movieDetails;
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const filmDetails = await fetchMovieById(movieId);
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
      <Wrapper>
        {image && (
          <Poster
            src={`https://image.tmdb.org/t/p/w300/${image}`}
            alt="film poster"
          />
        )}
        <Details>
          <Title>{`${title}(${year ? year : 'YYYY'})`}</Title>
          <Text>{`User Score: ${score}%`}</Text>
          <Overview>Overview</Overview>
          <Text>{overview}</Text>
          <Genres>Genres</Genres>
          <ul>
            {genres &&
              genres.map(genre => <Genre key={genre.id}>{genre.name}</Genre>)}
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
