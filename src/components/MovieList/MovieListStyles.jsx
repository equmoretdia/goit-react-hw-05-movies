import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  list-style: disc;
  padding-left: 20px;
  cursor: pointer;
`;

const Item = styled.li`
  padding: 5px 0;
`;

const LinkTo = styled(Link)`
  font-weight: 500;
  color: inherit;
  &:hover,
  &:focus {
    color: #ee3d3d;
  }
  text-decoration: none;
`;

export { List, Item, LinkTo };
