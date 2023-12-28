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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 90px;
  height: 30px;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
  &:hover,
  &:focus {
    border-width: 2px;
    border-color: #353535;
  }
`;

const GoBack = styled(Link)`
  font-size: 13px;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  box-shadow: 0px 2px 1px -1px rgba(46, 47, 66, 0.08),
    0px 2px 1px -1px rgba(46, 47, 66, 0.16),
    0px 3px 6px -6px rgba(46, 47, 66, 0.08);
`;

const Poster = styled.img`
  display: block;
  width: 100%;
  max-width: 250px;
  height: auto;
`;

const Details = styled.div`
  min-width: 200px;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Overview = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Genres = styled.h4`
  font-weight: 500;
  margin-bottom: 10px;
`;

const Genre = styled.li`
  padding: 3px 0;
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

export {
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
  List,
  Item,
  LinkTo,
};
