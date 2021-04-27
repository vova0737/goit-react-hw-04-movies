import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const ApiKey = '1690d1319b4e719ac3308f10c68ac649';

export const getPopularFilms = () => {
  return axios
    .get(`/trending/all/day?api_key=${ApiKey}`)
    .then(({ data }) => data)
    .catch(console.log);
};

export const getMovieDetails = async id => {
  try {
    return await axios
      .get(`/movie/${id}?api_key=${ApiKey}&language=en-US`)
      .then(({ data }) => data);
  } catch (error) {
    throw error;
  }
};

export const getMovieCast = async id => {
  return axios
     .get(`/movie/${id}/credits?api_key=${ApiKey}&language=en-US`, )
     .then(({ data }) => data)
     .catch(console.log);
};

export const getMovieReview = async id => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${ApiKey}&language=en-US`, )
    .then(({ data }) => data)
    .catch(console.log);
};

export const getMoviesSearch = async searchQuery => {
  return axios
    .get(
      `/search/movie?api_key=${ApiKey}&query=${searchQuery}&language=en-US&page=1&include_adult=false`,
    )
    .then(({ data }) => data)
    .catch(console.log);
};
