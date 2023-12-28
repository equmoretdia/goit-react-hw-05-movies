import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHeading = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const PageHeadingHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

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

export { PageHeading, PageHeadingHidden, List, Item, LinkTo };
