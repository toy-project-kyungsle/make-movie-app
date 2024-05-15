import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import styles from '@/style/home.module.scss';

const Group_obj = {
  High_Rating: 'minimum_rating=8',
  Romance: 'genre=romance',
  Music: 'genre=music',
  Animation: 'genre=animation',
};
const Group_key_arr = Object.keys(Group_obj);

const Home = () => {
  return (
    <div>
      {Group_key_arr.map((group) => {
        return (
          <div key={group}>
            <div className={styles.title}>
              <div className={styles.titleBox}>
                <Link
                  href={`/group`}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                  }}
                >
                  <div className={styles.titleImg}>
                    <FontAwesomeIcon icon={faCompactDisc}></FontAwesomeIcon>
                  </div>
                  <div>
                    <span>{group}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <h3 className={styles.copyright_letter}>Copyright belongs to Kyungsle</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
