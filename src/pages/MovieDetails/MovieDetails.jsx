import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { fetchSelectedTrending } from 'servises/themoviedbAPI';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import css from './MovieDetails.module.css';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// import TrendingMovieItem from 'components/TrendingMovieItem/TrendingMovieItem';

const TrendingMovieItem = lazy(() =>
  import('components/TrendingMovieItem/TrendingMovieItem')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  // console.log('location from MovieDetails', location);
  const backLinkRef = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchSelectedTrendingFilm = async () => {
      try {
        setLoading(true);
        setError(null);

        await fetchSelectedTrending(movieId).then(data => {
          setMovie(data);
          console.log(data);
        });
      } catch {
        setError(error);
        Notify.failure('Oops, something went wrong!');
      } finally {
        setLoading(false);
      }
    };
    fetchSelectedTrendingFilm();
  }, [movieId, error]);

  return (
    <main>
      <Link className={css.btnGoBack} to={backLinkRef.current}>
        Go Back
      </Link>
      {loading && <Loader />}
      {movie && (
        <>
          <TrendingMovieItem movie={movie} />

          <div className={css.container}>
            <h3 className={css.title}>Aditional information</h3>
            <ul className={css.list}>
              <li className={css.item}>
                <Link className={css.link} to="cast">
                  Cast
                </Link>
              </li>
              <li className={css.item}>
                <Link className={css.link} to="reviews">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
