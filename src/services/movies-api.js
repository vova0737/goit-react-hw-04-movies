
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = '1690d1319b4e719ac3308f10c68ac649';

export const popularFilmsApi = () => {
  return axios
    .get(`/trending/all/day?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(console.log);
};

export const fetchMovieDetails = async id => {
  try {
    return await axios
      .get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then(({ data }) => data);
  } catch (error) {
    throw error;
  }
};

export const fetchMoviesSearch = async search => {
  return await axios
    .get(
      `/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`,
    )
    .then(({ data }) => data)
    .catch(console.log);
};

export const movieCast = id => {
  return axios
    .get(`/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then(({ data }) => data)
    .catch(console.log);
};

export const movieReviews = async id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US`,
    )
    .then(({ data }) => data)
    .catch(console.log);
};
