import '@testing-library/jest-dom';
import { getMoviesFromServer, getOneMovieFromServer } from '@/api/movie';

test('get movies from server', async () => {
  const res = await getMoviesFromServer({
    limit: '3',
  });

  expect(res.length === 3).toBe(true);
  expect(res.every((movie) => movie.state === 'ok')).toBe(true);
});

test('get one movie from server', async () => {
  const res = await getOneMovieFromServer({
    movie_id: '1',
  });

  expect(res.id === 1).toBe(true);
  expect(res.imdb_code === 'tt3208802').toBe(true);
});
