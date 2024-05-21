import Link from 'next/link';
// style
import styles from '@/style/navbar.module.scss';

const Group_obj: { [key: string]: string } = {
  High_Rating: 'minimum_rating=8',
  Romance: 'genre=romance',
  Music: 'genre=music',
  Animation: 'genre=animation',
};
const Group_key_arr = Object.keys(Group_obj);

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.pageName}>
        <Link href={'/'}>SooFLEX</Link>
      </div>

      <div className={styles.GroupLink}>
        {Group_key_arr.map((key) => {
          return (
            <div className={styles.Link} key={key}>
              <div className={styles.Link_sep}>
                <Link href={`/group?${Group_obj[key]}&page=1`}>{key}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
