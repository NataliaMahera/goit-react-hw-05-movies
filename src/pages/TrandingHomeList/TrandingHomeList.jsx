import { Link } from 'react-router-dom';

const TrandingHomeList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{!title ? name : title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrandingHomeList;
