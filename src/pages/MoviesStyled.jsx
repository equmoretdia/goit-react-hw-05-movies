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

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    border-color: #353535;
  }
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  background-color: inherit;
  border: none;
  padding: 5px;
  &::placeholder {
    font: inherit;
  }
`;

const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 30px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const SearchedMovies = styled.ul`
  list-style: disc;
  padding-left: 20px;
  cursor: pointer;
`;

const SearchedMovie = styled.li`
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

export {
  Heading,
  Form,
  Input,
  Button,
  SearchedMovies,
  SearchedMovie,
  MovieLink,
};
