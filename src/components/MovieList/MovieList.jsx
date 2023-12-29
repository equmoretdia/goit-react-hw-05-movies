import PropTypes from 'prop-types';
import { List, Item, LinkTo } from './MovieListStyles';

const MovieList = ({ list, state }) => {
  return (
    <List>
      {list.map(({ title, id }) => (
        <Item key={id}>
          <LinkTo key={id} to={`/movies/${id}`} state={state}>
            {title}
          </LinkTo>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  state: PropTypes.object.isRequired,
};

export default MovieList;
