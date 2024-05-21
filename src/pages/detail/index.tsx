import { getOneMovieFromServer } from '@/api/movie';
import styles from '@/style/detail.module.scss';
import { MovieDataType } from '@/data/type/movie';
import { withRouter } from 'next/router';
import { useQuery } from 'react-query';

function MovieDetail({ router }: any) {
  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery<MovieDataType>('myQueryKey', () => getOneMovieFromServer(router.query));

  return (
    <div className={styles.movie}>
      <div className={styles.background}>
        <img
          className={styles.Detail_bg}
          src={movieData?.background_image_original || ''}
          alt="none"
        />
      </div>
      <div className={styles.show}>
        <div className={styles.shortView}>
          <div className={styles.shortView_Img}>
            <img src={movieData?.medium_cover_image || ''} alt={movieData?.title} />
          </div>
          <div className={styles.shortView_letters}>
            <h3>{movieData?.title || ''}</h3>
            <p>{movieData?.rating ? `rating: ${movieData?.rating} / 10` : null}</p>
            <p>{movieData?.runtime ? `runtime: ${movieData?.runtime} (min)` : null}</p>
          </div>
        </div>

        {movieData?.description_full && (
          <div className={styles.descript}>
            <p>{movieData.description_full}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default withRouter(MovieDetail);
