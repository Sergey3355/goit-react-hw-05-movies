import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Appbar from './AppBar/AppBar';

const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  )
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));

export const App = () => {
  return (
    <>
      <Appbar />
      {/* <SearchBar></SearchBar> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Navigate to="home" />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>

          {/* <Route path="*" element={<NotFoundView />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
