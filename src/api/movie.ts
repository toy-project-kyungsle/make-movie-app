import apiInstance from './apiInstance';

const getMoviesFromServer = async (props: { [x: string]: string }) => {
  const queryParams = new URLSearchParams(props).toString();
  const response = await apiInstance.get(`/list_movies.json?${queryParams}`);
  console.log(`%c ${`kyungsle`}🙏🏻`, 'color:red');
  return response.data.data.movies;
};

const getOneMovieFromServer = async (props: { [x: string]: string }) => {
  const queryParams = new URLSearchParams(props).toString();
  const response = await apiInstance.get(`/movie_details.json?${queryParams}`);
  return response.data.data.movie;
};

export { getMoviesFromServer, getOneMovieFromServer };
