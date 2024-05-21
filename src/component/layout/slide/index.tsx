import { getMoviesFromServer } from '@/api/movie';
import { useQuery } from 'react-query';
import styles from '@/style/slide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { MovieDataType } from '@/type/movie';
import MovieCard from '@/component/common/MovieVerticalCard';

const Slide = () => {
  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery<MovieDataType[]>('myQueryKey', () =>
    getMoviesFromServer({ limit: '10', sort_by: 'rating' }),
  );

  const [trans, setTrans] = useState(0);

  // >= 0 : The End of the Right!
  const onClickL = () => {
    if (trans >= 0) return;

    setTrans((current) => current + 460);
  };

  // -1380 : 230 * 6, so the button can be clicked only 3 times
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
