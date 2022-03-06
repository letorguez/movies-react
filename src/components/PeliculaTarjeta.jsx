import { Link } from "react-router-dom";
import styles from "./PeliculaTarjeta.module.css";
import { obtenerImgPelicula } from "../utils/obtenerImgPelicula";
import { obtenerBandera } from "../utils/obtenerBandera";

export function PeliculaTarjeta({ pelicula }) {
  const imagenUrl = obtenerImgPelicula(pelicula.poster_path, 300)
  const banderaUrl = obtenerBandera(pelicula.original_language)
  return (
    <li className={styles.peliculaTarjeta}>
      <Link to={"/peliculas/" + pelicula.id}>
        <div className="detalles">
          <img src={banderaUrl} alt={pelicula.original_language} />
        </div>
        <img src={imagenUrl} alt={pelicula.title} className={styles.peliculaImagen} />
        <div>{pelicula.title}</div>
      </Link>
    </li>
  );
}