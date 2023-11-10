import { useEffect, useState } from 'react';
import { fetchTrending } from '../../servises/themoviedbAPI';
import TrandingHomeList from 'pages/TrandingHomeList/TrandingHomeList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingList = async () => {
      try {
        setLoading(true);

        await fetchTrending().then(films => {
          setFilms(films);
        });
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingList();
  }, [error]);

  return (
    <>
      <h1>Trending today</h1>
      <TrandingHomeList films={films} />
      {loading && <Loader />}
    </>
  );
};

export default Home;
