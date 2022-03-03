import { get } from "../utils/httpClient";
/* import { useEffect, useState } from "react"; */
import { useParams } from "react-router";
import styles from "./MovieDetails.module.css";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { useQuery } from "react-query";

export function MovieDetails() {
  const format = new Intl.ListFormat("en");
  const { movieId } = useParams();
  const {data: pelicula, isLoading} = useQuery(["movieDetails", movieId], () => get("/movie/" + movieId));
  /* const [isLoading, setIsLoading] = useState(true);
  const [pelicula, setMovie] = useState(null);
    
 
  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]); */
  if (isLoading) {
    return <Spinner />;
  }
  const imageUrl = getMovieImg(pelicula.poster_path, 500)
  return (
    <div className={styles.detailsContainer}>
      <img
        src={imageUrl}
        alt={pelicula.title}
        className={styles.col + " " + styles.movieImage}
      />
      <div className={styles.col + " " + styles.movieDetails}>
        <p className={styles.firstItem}>
          <strong>Title: </strong>
          {pelicula.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {format.format(pelicula.genres.map((genre) => genre.name))}
        </p>
        <p>
          <strong>Description: </strong>
          {pelicula.overview}
        </p>
      </div>
    </div>
  );
}
