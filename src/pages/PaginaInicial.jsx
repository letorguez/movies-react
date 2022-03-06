import { useSearchParams } from "react-router-dom";
import { PeliculasGrid } from "../components/PeliculasGrid";
import { Buscar } from "../components/Buscar";
import { useDebounce } from "../hooks/useDebounce";

export function PaginaInicial() {
  const [query] = useSearchParams();
  const buscar = query.get("buscar");
  const debouncedSearch = useDebounce(buscar, 300);
  return (
    <div>
      <Buscar />
      <PeliculasGrid key={debouncedSearch} buscar={debouncedSearch}/>
    </div>
  );
}
