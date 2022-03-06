import { Link } from "react-router-dom";
import styles from "./PeliculaTarjeta.module.css";
import { obtenerImgPelicula } from "../utils/obtenerImgPelicula";
import { obtenerBandera } from "../utils/obtenerBandera";
import { obtenerColor } from "../utils/obtenerColor";

export function PeliculaTarjeta({ pelicula }) {
  const imagenUrl = obtenerImgPelicula(pelicula.poster_path, 300)
  const banderaUrl = obtenerBandera(pelicula.original_language)
  const colorPnt = obtenerColor(pelicula.vote_average)
  return (
    <li className={styles.peliculaTarjeta}>
      <Link to={"/peliculas/" + pelicula.id}>
        <img src={imagenUrl} alt={pelicula.title} className={styles.peliculaImagen} />
        <div className={styles.detalles}>
          <img src={banderaUrl} alt={pelicula.original_language} />
          <div className={styles.rank} style={{backgroundColor: colorPnt}}>
            {pelicula.vote_average}
          </div>
        </div>
        <div>{pelicula.title}</div>
      </Link>
    </li>
  );
}