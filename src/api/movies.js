import axios from 'axios';

const API_KEY = '8ef56f4ee798497d067f56c824cb15b9';

const BASE_URL = 'https://api.themoviedb.org/3';

export async function getMovies(type, id, query) {
  const CONSTANTS_ENDPOINTS_TYPES = {
    trending: '/trending/movie/day',
    movieById: `/movie/${id}`,
    searchByQuery: '/search/movie',
    cast: `/movie/${id}/credits`,
    reviews: `/movie/${id}/reviews`,
  };

  const searchParams = new URLSearchParams({
    query: query,
    include_adult: true,
  });

  const response = await axios.get(
    `${BASE_URL}${CONSTANTS_ENDPOINTS_TYPES[type]}?api_key=${API_KEY}&${
      type === 'searchByQuery' ? searchParams : ''
    }`
  );
  return response.data;
}
