import { useMemo, useState } from 'react';
// component
import MovieCard from '@/component/common/MovieVerticalCard';
// data
import { getMoviesFromServer } from '@/api/movie';
import { MovieDataType } from '@/type/movie';
// style
import styles from '@/style/slide.module.scss';
// resource
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
// external pkg
import { useQuery } from 'react-query';

const Slide = ({ query }: { query: string }) => {
  const [queryKey, queryValue] = useMemo(() => query.split('='), [query]);
  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery<MovieDataType[]>(`movie-slide-${queryKey}-${queryValue}`, () =>
    getMoviesFromServer({ limit: '10', sort_by: 'rating', [queryKey]: queryValue }),
  );

  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if (trans >= 0) return;

    setTrans((current) => current + 460);
  };

  const onClickR = () => {
    if (trans <= -1380) return;

    setTrans((current) => current - 460);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slide_show}>
        <div className={styles.slides} style={{ transform: `translateX(${trans}px)` }}>
          {movieData &&
            movieData.map((movie) => {
              if (movie.medium_cover_image != null) {
                return (
                  // MovieSlide is redering code with Slide!
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    title={movie.title}
                  />
                );
              }
            })}
        </div>
      </div>

      <div className={styles.controller}>
        <button className={styles.left} onClick={onClickL}>
          <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
        </button>
        <button className={styles.right} onClick={onClickR}>
          <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Slide;
