import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as Styled from './Search.styled';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      setError('Please enter your search query');
      return;
    }
    setSearchParams({ query: query });
    setError('');
  };

  useEffect(() => {
    const value = searchParams.get('query');
    if (value) {
      setQuery(value);
    }
  }, [searchParams]);

  return (
    <>
      {error !== '' && (
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>{error}</h1>
      )}
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="What are we looking for today?"
          onChange={handleChange}
        ></Styled.Input>
      </Styled.Form>
    </>
  );
};

export default Search;
