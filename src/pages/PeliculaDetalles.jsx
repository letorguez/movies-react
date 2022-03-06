import { get } from "../utils/httpClient";
/* import { useEffect, useState } from "react"; */
import { useParams } from "react-router";
import styles from "./PeliculaDetalles.module.css";
import { Spinner } from "../components/Spinner";
import { obtenerImgPelicula } from "../utils/obtenerImgPelicula";
import { useQuery } from "react-query";

export function PeliculaDetalles() {
  const format = new Intl.ListFormat("en");
  const { peliculaId } = useParams();
  const {data: pelicula, isLoading} = useQuery(["peliculaDetalles", peliculaId], () => get("/movie/" + peliculaId));

  if (isLoading) {
    return <Spinner />;
  }
  const imagenUrl = obtenerImgPelicula(pelicula.poster_path, 500)
  return (
    <div className={styles.detallesContainer}>
      <img
        src={imagenUrl}
        alt={pelicula.title}
        className={styles.col + " " + styles.peliculaImagen}
      />
      <div className={styles.col + " " + styles.peliculaDetalles}>
        <p className={styles.primerItem}>
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
