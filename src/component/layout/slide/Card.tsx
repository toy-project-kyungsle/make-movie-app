import Link from 'next/link';
import styles from '@/style/slide.module.scss';

interface MovieCardProps {
  id: number;
  coverImg: string;
  rating: number;
  runtime: number;
  title: string;
}

const MovieCard = ({ id, coverImg, rating, runtime, title }: MovieCardProps) => {
  return (
    <div className={styles.movie}>
      <Link href={`/detail?id=${id}`}>
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

export default MovieCard;
