import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/style/group.module.scss';
import { getMoviesFromServer } from '@/api/movie';
import { useQuery } from 'react-query';
import { MovieDataType } from '@/type/movie';
import MovieGroupCard from '@/component/layout/group/Card';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group({ router }: any) {
  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery<MovieDataType[]>(['myQueryKey22', router?.query], () =>
    getMoviesFromServer({ ...(router?.query || {}), sort_by: 'rating' }),
  );

  useEffect(() => {
    console.log(`kyungsle`, router?.query);
  }, [router?.query]);

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
          {/* {List_arr.map((lst) => {
            return (
              <Link key={lst} href={`/page/${group}/${lst}`}>
                {lst}
              </Link>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Group);
