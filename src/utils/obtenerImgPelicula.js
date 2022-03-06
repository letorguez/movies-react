import placeholder from "../placeholder.jpg";

export function obtenerImgPelicula(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
