import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { fetchSelectedTrending } from 'servises/themoviedbAPI';
import css from './MovieDetails.module.css';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchSelectedTrendingFilm = async () => {
      try {
        setLoading(true);

        await fetchSelectedTrending(movieId).then(data => {
          setMovie(data);
          console.log(data);
        });
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSelectedTrendingFilm();
  }, [movieId, error]);

  const {
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
  } = movie || {};

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {loading && <Loader />}
      {!movie ? (
        <>
          <img src={defaultImg} alt={original_title} />
          <p>The resource you requested could not be found</p>
        </>
      ) : (
        <>
          <div>
            <img
              src={`https:image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
            />
            <h2>
              {original_title} ({release_date.slice(0, 4)})
            </h2>
            <p>User Score: {Math.round(vote_average)}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres?.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Aditional information</h3>
            <ul>
              <li>
                <Link className={css.cast} to="cast">
                  Cast
                </Link>
              </li>
              <li>
                <Link className={css.reviews} to="reviews">
                  Reviews
                </Link>
              </li>
            </ul>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
