import { getMovies } from 'api/movies';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Styled from './Cast.styled';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies('cast', Number(movieId))
      .then(({ cast }) => {
        if (!cast.length) {
          setError('There is no information about the cast');
          return;
        }
        console.log(cast);
        setCastInfo(cast);
        setError('');
      })
      .catch(() => {
        setError('Oops, something went wrong. Try again later');
      });
  }, [movieId]);

  return (
    <>
      {movieId && error === '' ? (
        <Styled.Div>
          <Styled.List>
            {castInfo.map(item => (
              <Styled.ListItem key={item.id}>
                <Styled.Image
                  src={
                    item.profile_path
                      ? `${POSTER_BASE_URL}w200${item.profile_path}`
                      : 'https://demofree.sirv.com/nope-not-here.jpg'
                  }
                  alt={item.name}
                  width={200}
                />
                <Styled.Subtitle>{item.name}</Styled.Subtitle>
                <Styled.Description>
                  played as {item.character}
                </Styled.Description>
              </Styled.ListItem>
            ))}
          </Styled.List>
        </Styled.Div>
      ) : (
        <h1>{error}</h1>
      )}
    </>
  );
};

export default Cast;
