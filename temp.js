import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieSearch from "../render/MovieSearch";
import { Link } from "react-router-dom"
import styles from "./Search.module.css";
import Load from '../component/Load';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Search() {
  const { search, lst } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(1);
  const [pageIndex, setPageIndex] = useState(1);
  const [movArr, setMovArr] = useState([]);

  // const getMovies = async () => {
  //   let json = await (
  //       await fetch(`https://yts.mx/api/v2/list_movies.json?page=${pageIndex}&sort_by=rating`)
  //     ).json();
  //     setMovies(json.data.movies);

  //   console.log(movies)
  // }

  const getMovies =  () => {
    console.log(`getmovie`)
      fetch(`https://yts.mx/api/v2/list_movies.json?page=${pageIndex}&sort_by=rating`)
        .then((res) => res.json())
        .then((json) => setMovies(json.data.movies))
      setLoading(false);
  }

  const countMovie = () => {

    for (let i = (index - 1); i < 20; i++) {
      if ((movies[i].summary.indexOf(search) !== -1
        || movies[i].description_full.indexOf(search) !== -1
        || movies[i].title.indexOf(search) !== -1)
        && index < 20 && movArr.length < 20) {
        setIndex((curr) => curr + 1);
        setMovArr([...movArr, movies[i]]);
      }
      else if (index === 20 && movArr.length < 20) {
        setPageIndex((curr) => curr + 1);
        setIndex(1);
        break;
      }
      else if (index < 20 && movArr.length === 20) {
        setLoading(false);
        return;
      }
    }

    console.log("countMovie")
    console.log(movArr)

    if (movArr.length === 20) {
      setLoading(false);
      return;
    }
    else if (index === 20) {
      setPageIndex((curr) => curr + 1);
      setIndex(1);
    }
  }

  useEffect(() => {
    setLoading(true);
    setMovArr([]);
    getMovies();
  }, [lst])

  useEffect(() => {
    if (movies.length === 0)
      return ;
    getMovies();
  }, [pageIndex])

  useEffect(() => {
    if (movies.length === 0)
      return ;
    countMovie();
    console.log(`useEffect`)
    console.log(movies)
    countMovie();

  }, [movies])

  return (
    <div className={styles.container}>
      {
        (loading)
          ? <Load />
          :
          <div className={styles.movies}>
            {movArr.map((movie) => (
              <MovieSearch
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                rating={movie.rating}
                runtime={movie.runtime}
                summary={movie.summary}
                year={movie.year} />
            ))}
          </div>
      }
      {
        (loading)
          ? null
          :
          <div className={styles.footer}>
            <div className={styles.list}>
              {
                List_arr.map((lst) => {
                  return (
                    <Link
                      key={lst}
                      to={`/search/${search}/${lst}`}
                    >
                      {lst}</Link>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default Search;