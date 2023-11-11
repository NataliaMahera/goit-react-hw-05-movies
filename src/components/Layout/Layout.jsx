import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink className={css.headerLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.headerLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
