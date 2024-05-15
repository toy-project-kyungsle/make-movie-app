import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '@/style/group.module.scss';
import default_Img from './Img/default_Img.jpeg';

interface MovieGroupCardProps {
  id: number;
  coverImg: string;
  title: string;
  rating: number;
  runtime: number;
  year: number;
  summary: string;
}

function MovieGroupCard({
  id,
  coverImg,
  title,
  rating,
  runtime,
  year,
  summary,
}: MovieGroupCardProps) {
  return (
    <div className={styles.movie}>
      {/* ShortView (Img, Title, rating, runtime...) */}
      <div className={styles.show}>
        {/* Img */}
        <div className={styles.Img}>
          <img src={coverImg} alt={title} />
        </div>
        {/* Letters */}
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

export default MovieGroupCard;
