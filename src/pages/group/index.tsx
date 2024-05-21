import { withRouter } from 'next/router';
import styles from '@/style/group.module.scss';
import { getMoviesFromServer } from '@/api/movie';
import { useQuery } from 'react-query';
import { MovieDataType } from '@/data/type/movie';
import MovieGroupCard from '@/component/common/MovieHorizontalCard';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group({ router }: any) {
  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery<MovieDataType[]>(['myQueryKey22', router?.query], () =>
    getMoviesFromServer({ ...(router?.query || {}), sort_by: 'rating' }),
  );

  const changeQueryPage = (pageNum: number) => {
    // 새로운 쿼리 값으로 URL 변경
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: pageNum }, // 기존 쿼리 유지하면서 새로운 쿼리 값 추가
    });
  };

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
          {List_arr.map((pageNum) => {
            return (
              <span key={pageNum} onClick={() => changeQueryPage(pageNum)}>
                {pageNum}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Group);
