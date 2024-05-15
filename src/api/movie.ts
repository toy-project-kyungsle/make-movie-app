import apiInstance from './apiInstance';

const getMoviesFromServer = async (props: { [x: string]: string }) => {
  const queryParams = new URLSearchParams(props).toString();
  const response = await apiInstance.get(`/list_movies.json?${queryParams}`);
  return response.data.data.movies;
};

export { getMoviesFromServer };
