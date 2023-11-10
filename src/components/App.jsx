import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <header>
      <nav>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerLink} to="/movies">
          Movies
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </main>
    </header>
  );
};

export default App;
