import { useAppSelector } from '../../hooks';
import FilmButtons from '../film-buttons/film-buttons';
import Header from '../header/header';

function PromoFilm(): JSX.Element {
  const promoFilm = useAppSelector((state) => state.promoFilm);

  return(
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.previewImage} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header className='film-card__head' />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>
            <FilmButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;
