import { getOneMovieFromServer } from '@/api/movie';
import styles from '@/style/detail.module.scss';
import { MovieDataType } from '@/type/movie';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id = '1' } = useParams();

  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery<MovieDataType>('myQueryKey', () => getOneMovieFromServer({ movie_id: id }));

  return (
    <div className={styles.movie}>
      {/* Background Img */}
      <div className={styles.background}>
        <img
          className={styles.Detail_bg}
          src={movieData?.background_image_original || ''}
          alt="none"
        />
      </div>
      {/* ShortView (Img, Title, rating, runtime...) */}
      <div className={styles.show}>
        <div className={styles.shortView}>
          {/* Img */}
          <div className={styles.shortView_Img}>
            <img src={movieData?.medium_cover_image || ''} alt={movieData?.title} />
          </div>
          {/* title, rating, runtime, genre */}
          <div className={styles.shortView_letters}>
            <h3>{movieData?.title || ''}</h3>
            <p>{movieData?.rating ? `rating: ${movieData?.rating} / 10` : null}</p>
            <p>{movieData?.runtime ? `runtime: ${movieData?.runtime} (min)` : null}</p>
            {/* {genres ? (
              // genre is the 'array'
              <div>
                <b>{'genres'}</b>
                <ul>
                  {genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ) : null} */}
          </div>
        </div>

        {/* Description */}
        {movieData?.description_full && (
          <div className={styles.descript}>
            <p>{movieData.description_full}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
