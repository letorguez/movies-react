import styles from "./Buscar.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
export function Buscar() {
  const [query, setQuery] = useSearchParams();
  const buscar = query.get("buscar");


  return (
    <form className={styles.buscarContainer}>
      <div className={styles.buscarCaja}>
        <input
          className={styles.buscarInput}
          type="text"
          value={buscar ?? ""}
          autoFocus
          placeholder="Título de película"
          aria-label="Buscar Películas"
          onChange={(e) => {
            const value = e.target.value;
            setQuery({buscar: value})
          }}
        />
        <FaSearch size={20} className={styles.buscarBtn}/>
      </div>
    </form>
  );
}
