import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MoreFilms from '../../components/more-films/more-films';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Tabs from '../../components/tabs/tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../../store/api-actions';

function MoviePage():JSX.Element {
  const film = useAppSelector((state) => state.film);
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const isFilmLoading = useAppSelector((state) => state.isFilmDataLoading);


  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchSimilarFilmsAction(id));

    }
  }, [id, dispatch]);

  if (isFilmLoading) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className='film-card__head' />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <Breadcrumbs film={film} />

            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <Tabs film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoreFilms />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MoviePage;
