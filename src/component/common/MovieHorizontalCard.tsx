import Link from 'next/link';
import styles from '@/style/group.module.scss';

interface MovieHorizontalCardProps {
  id: number;
  coverImg: string;
  title: string;
  rating: number;
  runtime: number;
  year: number;
  summary: string;
}

function MovieHorizontalCard({
  id,
  coverImg,
  title,
  rating,
  runtime,
  year,
  summary,
}: MovieHorizontalCardProps) {
  return (
    <div className={styles.movie}>
      <div className={styles.box}>
        <div className={styles.image}>
          <Link href={`detail?movie_id=${id}`}>
            <img src={coverImg} alt={title} />
          </Link>
        </div>
        <div className={styles.letters}>
          <div className={styles.title}>
            <div>
              <h3>
                <Link href={`detail?movie_id=${id}`}>
                  {title.length > 35 ? `${title.slice(0, 35)}...` : title}
                </Link>
              </h3>
            </div>
          </div>
          <p>{year ? `year: ${year}` : null}</p>
          <p>{rating ? `rating: ${rating} / 10` : null}</p>
          <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
          <p>{summary ? (summary.length > 180 ? `${summary.slice(0, 180)}...` : summary) : null}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieHorizontalCard;
