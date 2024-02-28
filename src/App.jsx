import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainMenu from 'components/MainMenu/MainMenu';
import Loader from 'components/Loader/Loader';
import * as Styled from './App.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieSpecificPage = lazy(() =>
  import('pages/MovieSpecificPage/MovieSpecificPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export default function App() {
  return (
    <Styled.MainDiv>
      <MainMenu />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieSpecificPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Styled.MainDiv>
  );
}
