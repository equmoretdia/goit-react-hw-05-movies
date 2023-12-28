import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  padding: 20px;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.1em;
`;

const MenuItem = styled(NavLink).attrs({
  active: 'active',
})`
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  &.active {
    color: #ee3d3d;
  }
  text-decoration: none;
`;

const Main = styled.main`
  padding: 20px;
`;

const Footer = styled.footer`
  padding: 20px;
`;

export { Header, Menu, MenuItem, Main, Footer };
