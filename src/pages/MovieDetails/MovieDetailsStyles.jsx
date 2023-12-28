import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Heading = styled.h1`
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

const Text = styled.p`
  margin-bottom: 20px;
`;

const AdditionalInfo = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(46, 47, 66, 0.08),
    0px 2px 1px -1px rgba(46, 47, 66, 0.16),
    0px 3px 6px -6px rgba(46, 47, 66, 0.08);
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

export { Heading, Text, AdditionalInfo, List, Item, LinkTo };
