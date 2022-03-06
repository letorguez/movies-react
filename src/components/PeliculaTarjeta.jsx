import { Link } from "react-router-dom";
import styles from "./PeliculaTarjeta.module.css";
import { obtenerImgPelicula } from "../utils/obtenerImgPelicula";

export function PeliculaTarjeta({ pelicula }) {
  const imagenUrl = obtenerImgPelicula(pelicula.poster_path, 300)
  return (
    <li className={styles.peliculaTarjeta}>
      <Link to={"/peliculas/" + pelicula.id}>
        <img src={imagenUrl} alt={pelicula.title} className={styles.peliculaImagen} />
        <div>{pelicula.title}</div>
      </Link>
    </li>
  );
}