import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { fetchSearchByKeyWord } from 'servises/themoviedbAPI';
import css from './Movies.module.css';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noMoviesText, setNoMoviesText] = useState(false);

  //Значення з пошукового параметру, який записується в ключ query
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;

    //Зміна обєкту пошукових параметрів після сабміту форми
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!queryValue) return;

    const fetchFilmByWord = async () => {
      try {
        setLoading(true);
        setError(null);

        await fetchSearchByKeyWord(queryValue).then(results => {
          setSearchedMovies(results);
          setNoMoviesText(results.length === 0);
        });

        // if (searchedMovies.length === 0) {
        //   return Notify.warning(
        //     'Sorry, there are no movies matching your search query. Please try again.'
        //   );
        // }

        const newQueryValue = queryValue.trim();
        if (!newQueryValue) {
          return Notify.warning('Please, fill the main field');
        }
      } catch {
        setError(error);
        Notify.failure('Oops, something went wrong!');
      } finally {
        setLoading(false);
      }
    };
    fetchFilmByWord();
  }, [error, queryValue]);

  return (
    <>
      {loading && <Loader />}
      <form className={css.searchForm} onSubmit={onFormSubmit}>
        <label className={css.label}>
          <input
            type="text"
            required
            placeholder="Search movie"
            name="searchKey"
          />
        </label>
        <button type="submit">search</button>
      </form>
      {noMoviesText && (
        <p className={css.notification}>
          Sorry, there are no movies matching your search query. Please try
          again.
        </p>
      )}
      {searchedMovies && <MoviesList searchedMovies={searchedMovies} />}
    </>
  );
};

export default Movies;
