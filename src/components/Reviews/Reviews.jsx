import { getMovies } from 'api/movies';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Styled from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies('reviews', Number(movieId))
      .then(({ results }) => {
        console.log(results);
        if (!results.length) {
          setError('There is no information about the reviews');
          return;
        }

        setReviewsInfo(results);
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
            {reviewsInfo.map(item => (
              <Styled.ListItem key={item.id}>
                <Styled.Title>Author: {item.author}</Styled.Title>
                <Styled.Description>{item.content}</Styled.Description>
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

export default Reviews;
