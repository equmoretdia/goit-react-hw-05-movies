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

export default MovieList;
