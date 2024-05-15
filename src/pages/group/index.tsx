import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Group.module.css';
import { getMoviesFromServer } from '@/api/movie';
import { useQuery } from 'react-query';
import { MovieDataType } from '@/type/movie';
import MovieGroupCard from '@/component/layout/group/Card';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group({ page, group }: { page: string; group: string }) {
  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery<MovieDataType[]>('myQueryKey', () =>
    getMoviesFromServer({ page, sort_by: 'rating' }),
  );

  return (
    <div className={styles.container}>
      <div className={styles.movies}>
        {movieData &&
          movieData.map((movie) => (
            <MovieGroupCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              year={movie.year}
            />
          ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.list}>
          {List_arr.map((lst) => {
            return (
              <Link key={lst} to={`/page/${group}/${lst}`}>
                {lst}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Group;
