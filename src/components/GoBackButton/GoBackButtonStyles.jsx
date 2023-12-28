import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export { Button, GoBack };
