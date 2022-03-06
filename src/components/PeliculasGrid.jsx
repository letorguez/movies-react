import { get } from "../utils/httpClient";
//import React, { useEffect, useState } from "react";
import { PeliculaTarjeta } from "./PeliculaTarjeta";
import styles from "./PeliculasGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";
import { useInfiniteQuery } from "react-query";

export function PeliculasGrid({ buscar }) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["peliculas", buscar],
    ({ pageParam = 1 }) => {
      const buscarUrl = buscar
        ? "/search/movie?query=" + buscar + "&page=" + pageParam
        : "/discover/movie?page=" + pageParam;
      return get(buscarUrl);
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page === lastPage.total_pages) return false;
        return lastPage.page + 1;
      },
    }
  );
  const peliculas =
    data?.pages.reduce(
      (prevPeliculas, page) => prevPeliculas.concat(page.results),
      []
    ) ?? [];

  if (!isLoading && peliculas.length === 0) {
    return <Empty />;
  }
  return (
    <InfiniteScroll
      dataLength={peliculas.length}
      hasMore={hasNextPage | isLoading}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <ul className={styles.peliculasGrid}>
        {peliculas.map((pelicula) => (
          <PeliculaTarjeta key={pelicula.id} pelicula={pelicula} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
