import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}
