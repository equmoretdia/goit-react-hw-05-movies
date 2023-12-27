import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const PopularMovies = styled.ul`
  list-style: disc;
  padding-left: 20px;
  cursor: pointer;
`;

const PopularMovie = styled.li`
  padding: 5px 0;
`;

const MovieLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: inherit;
  &:hover,
  &:focus {
    color: #ee3d3d;
  }
  text-decoration: none;
`;

export { Heading, PopularMovies, PopularMovie, MovieLink };
