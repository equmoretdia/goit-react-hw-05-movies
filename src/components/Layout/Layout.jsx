import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Menu, MenuItem, Main, Footer } from './LayoutStyles';

const Layout = () => {
  return (
    <>
      <Header>
        <Menu>
          <li>
            <MenuItem to="/">Home</MenuItem>
          </li>
          <li>
            <MenuItem to="/movies">Movies</MenuItem>
          </li>
        </Menu>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
