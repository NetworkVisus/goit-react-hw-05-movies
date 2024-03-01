import { useLocation } from 'react-router-dom';
import * as Styled from './ListOfMovies.styled';

const ListOfMovies = ({ movies }) => {
  const location = useLocation();
  const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/';

  const datePref = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <Styled.List>
      {movies.map(movie => (
        <Styled.ListItem key={movie.id}>
          <Styled.StyledLink
            to={
              location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`
            }
            state={{ from: location }}
          >
            <Styled.Div>
              <Styled.Image
                src={
                  movie.poster_path
                    ? `${POSTER_BASE_URL}w200/${movie.poster_path}`
                    : 'https://demofree.sirv.com/nope-not-here.jpg'
                }
                alt={movie.title}
                width={200}
              />
            </Styled.Div>
            <Styled.Title>{movie.title}</Styled.Title>
            <Styled.Description>
              {movie.release_date
                ? new Date(movie.release_date).toLocaleDateString(
                    undefined,
                    datePref
                  )
                : ''}
            </Styled.Description>
          </Styled.StyledLink>
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
};

export default ListOfMovies;
