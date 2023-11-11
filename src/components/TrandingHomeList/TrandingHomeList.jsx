import { Link } from 'react-router-dom';
import css from './TrandingHomeList.module.css';

const TrandingHomeList = ({ films }) => {
  return (
    <ul className={css.list}>
      {films &&
        films.map(({ id, title, name }) => (
          <li key={id} className={css.item}>
            <Link className={css.link} to={`/movies/${id}`}>
              {!title ? name : title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default TrandingHomeList;
