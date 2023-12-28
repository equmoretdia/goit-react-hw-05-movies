const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=77971c184b7d14036ed9c9196e488377';
const API_LANG = 'language=en-US';
const optionsAPI = {
  movie: '',
  cast: '/credits',
  reviews: '/reviews',
};

async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?${API_LANG}&${API_KEY}`
    );
    const popularMovies = await response.json();
    // console.log(popularMovies.results);
    return popularMovies.results;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

async function fetchMovieByKeyword(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${query}&${API_LANG}&${API_KEY}`
    );
    const movieList = await response.json();
    console.log(movieList);
    return movieList;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

async function fetchMovieOptions(option, id) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}${option}?${API_LANG}&${API_KEY}`
    );
    const movieInfo = await response.json();
    // console.log(movieInfo);
    return movieInfo;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

export {
  fetchPopularMovies,
  fetchMovieByKeyword,
  fetchMovieOptions,
  optionsAPI,
};
