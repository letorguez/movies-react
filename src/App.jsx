import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { PeliculaDetalles } from "./pages/PeliculaDetalles";
import { PaginaInicial } from "./pages/PaginaInicial";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.titulo}>Películas</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/peliculas/:peliculaId" element={<PeliculaDetalles/>}/>
          <Route path="/" element={<PaginaInicial/>}/>
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
      </main>
    </Router>
  );
}
