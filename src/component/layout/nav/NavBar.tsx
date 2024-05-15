import styles from '@/style/navbar.module.scss';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

const Group_obj: { [key: string]: string } = {
  High_Rating: 'minimum_rating=8',
  Romance: 'genre=romance',
  Music: 'genre=music',
  Animation: 'genre=animation',
};
const Group_key_arr = Object.keys(Group_obj);

function NavBar() {
  const [search, setSearch] = useState('');

  // Event when u touch the Search Bar!
  const searchClick = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    // It's the Navigation Bar, always above the container!!
    <div className={styles.container}>
      {/*  Page Name */}
      <div className={styles.pageName}>
        <Link href={'/'}>SooFLEX</Link>
      </div>

      {/* Group Links */}
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
