import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        {/* Default route for non-existent URLs */}
        <Route
          path="*"
          element={<Layout />}
          action={() => {
            navigate('/', { replace: true });
          }}
        >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
