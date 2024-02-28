import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovies } from 'api/movies';
import MovieSpecificInfo from 'components/MovieSpecificInfo/MovieSpecificInfo';
import * as Styled from './MovieSpecificPage.styled';
import Loader from 'components/Loader/Loader';

const MovieSpecificPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState('');
  const { state } = useLocation();

  useEffect(() => {
    getMovies('movieById', Number(movieId))
      .then(results => {
        setMovieInfo(results);
        setError('');
      })
      .catch(() => {
        setError('Oops, something went wrong. Try again later');
      });
  }, [movieId]);

  return (
    <div>
      <Styled.GoBack to={state?.from ?? '/'}>Go back</Styled.GoBack>
      {movieInfo && error === '' ? (
        <>
          <MovieSpecificInfo movieData={movieInfo} />
          <Styled.SubTitle>Additional info:</Styled.SubTitle>
          <Styled.List>
            <Styled.ListItem>
              <Styled.StyledNavlink to="cast" state={{ from: state?.from }}>
                Cast
              </Styled.StyledNavlink>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.StyledNavlink to="reviews" state={{ from: state?.from }}>
                Reviews
              </Styled.StyledNavlink>
            </Styled.ListItem>
          </Styled.List>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};

export default MovieSpecificPage;
