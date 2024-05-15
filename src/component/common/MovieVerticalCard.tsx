import Link from 'next/link';
import styles from '@/style/slide.module.scss';

interface MovieVerticalCardProps {
  id: number;
  coverImg: string;
  rating: number;
  runtime: number;
  title: string;
}

const MovieVerticalCard = ({ id, coverImg, rating, runtime, title }: MovieVerticalCardProps) => {
  return (
    <div className={styles.movie}>
      <Link href={`/detail?movie_id=${id}`}>
        <img src={coverImg} alt={title} />
        <div className={styles.letters}>
          <div className={styles.title}>
            <div>
              <h3 className={styles.movieName}>
                {title.length > 35 ? `${title.slice(0, 35)}...` : title}
              </h3>
            </div>
          </div>
          <span>{rating ? `rating: ${rating} / 10` : null}</span>
          <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieVerticalCard;
