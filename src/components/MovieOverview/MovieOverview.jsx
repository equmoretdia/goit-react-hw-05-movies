import Placeholder from 'img/placeholder.jpg';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Poster,
  Details,
  Title,
  Text,
  Overview,
  Genres,
  Genre,
} from './MovieOverviewStyles';

const MovieOverview = ({ movie }) => {
  const { title, year, score, image, overview, genres } = movie;
  return (
    <Wrapper>
      <Poster
        src={image ? `https://image.tmdb.org/t/p/w300/${image}` : Placeholder}
        alt="film poster"
      />
      <Details>
        <Title>
          {title} {year ? `(${year})` : ''}
        </Title>
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
  );
};

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    image: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MovieOverview;
