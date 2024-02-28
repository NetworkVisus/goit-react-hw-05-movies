import * as Styled from './MovieSpecificInfo.styled';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/';

const MovieSpecificInfo = ({ movieData }) => {
  console.log(movieData);
  return (
    <Styled.Div>
      <Styled.Image
        src={
          movieData.poster_path
            ? `${POSTER_BASE_URL}w200/${movieData.poster_path}`
            : ''
        }
        alt={movieData.title}
      />
      <Styled.AdditionalDiv>
        <Styled.Title>{`${movieData.title} (${
          movieData.release_date
            ? new Date(movieData.release_date).getFullYear()
            : 'Unknown'
        })`}</Styled.Title>
        <Styled.InfoDiv>
          <Styled.Subtitle>Overview</Styled.Subtitle>
          <Styled.Text>{movieData.overview}</Styled.Text>
        </Styled.InfoDiv>
        <Styled.InfoDiv>
          <Styled.Subtitle>Genres</Styled.Subtitle>
          <Styled.Text>
            {movieData.genres.map(({ name }) => name).join(', ')}
          </Styled.Text>
        </Styled.InfoDiv>
      </Styled.AdditionalDiv>
    </Styled.Div>
  );
};

export default MovieSpecificInfo;
