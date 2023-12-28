import {
  Text,
  AdditionalInfo,
  List,
  Item,
  LinkTo,
} from './MovieAdditionalInfoStyles';

const MovieAdditionalInfo = () => {
  return (
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
  );
};

export default MovieAdditionalInfo;
