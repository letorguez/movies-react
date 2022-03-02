import pelicula from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
  const format = new Intl.ListFormat("en");
  return (
    <div className={styles.detailsContainer}>
      <img src={imageUrl} alt={pelicula.title} className={styles.col + " " + styles.movieImage} />
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
