const API_KEY = process.env.REACT_APP_IMDB_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchLatestMovies: `movie/latest?api_key=${API_KEY}&language=en-US`,
  fecthTvShows: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
