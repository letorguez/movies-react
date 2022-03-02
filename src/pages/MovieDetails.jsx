import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const format = new Intl.ListFormat("en");
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [pelicula, setMovie] = useState(null);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!pelicula) {
    return null;
  }
  const imageUrl = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
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
