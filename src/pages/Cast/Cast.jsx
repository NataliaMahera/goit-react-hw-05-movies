import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'servises/themoviedbAPI';

const Cast = () => {
  const { movieId } = useParams;
  const [castDetails, setCastDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActorsCast = async () => {
      try {
        setLoading(true);

        await fetchCast(movieId).then(cast => {
          setCastDetails(cast);
          console.log(cast);
        });
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchActorsCast();
  }, [movieId, error]);

  return (
    <div>
      {loading && <Loader />}
      {castDetails && (
        <ul>
          {castDetails.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img src={profile_path} alt={original_name} />
              <h3>{original_name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
