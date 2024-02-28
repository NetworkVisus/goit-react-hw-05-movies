import { useEffect, useState } from 'react';
import { getMovies } from 'api/movies';
import ListOfMovies from 'components/ListOfMovies/ListOfMovies';
import * as Styled from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies('trending')
      .then(({ results }) => {
        if (!results.length) {
          setError('Ooops, something went wrong, try again later');
          return;
        }
        setMovies(results);
        setError('');
      })
      .catch(() => setError('Ooops, something went wrong, try again later'));
  }, []);

  return (
    <Styled.Div>
      <Styled.Header>Popular today:</Styled.Header>
      {error === '' ? (
        <ListOfMovies movies={movies} />
      ) : (
        <Styled.Header>{error}</Styled.Header>
      )}
    </Styled.Div>
  );
};

export default HomePage;
