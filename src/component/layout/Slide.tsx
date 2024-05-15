import { getMoviesFromServer } from '@/api/movie';
import { useQuery } from 'react-query';
import styles from '@/style/slide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Slide = () => {
  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery('myQueryKey', () => getMoviesFromServer({ limit: '10', sort_by: 'rating' }));

  useEffect(() => {
    console.log(movieData);
  }, [movieData]);

  return (
    <div className={styles.container}>
      <div className={styles.slide_show}>
        {/* <div className={styles.slides} style={{ transform: `translateX(${trans}px)` }}>
          {movies.map((movie) => {
            if (movie.medium_cover_image != null) {
              return (
                // MovieSlide is redering code with Slide!
                <MovieSlide
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
        </div> */}
      </div>

      <div className={styles.controller}>
        <button className={styles.left} onClick={() => {}}>
          <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
        </button>
        <button className={styles.right} onClick={() => {}}>
          <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Slide;
