import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/movies';
import Search from 'components/Search/Search';
import ListOfMovies from 'components/ListOfMovies/ListOfMovies';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    getMovies('searchByQuery', 0, query)
      .then(({ results }) => {
        if (!results.length) {
          setError(`Sorry, there are no movies regarding your query`);
          return;
        }
        setMoviesData(results);
        setError('');
      })
      .catch(() => setError('Oops, something went wrong'));
  }, [searchParams]);

  return (
    <div>
      <Search />
      {error === '' ? <ListOfMovies movies={moviesData} /> : <h1>{error}</h1>}
    </div>
  );
};

export default MoviesPage;
