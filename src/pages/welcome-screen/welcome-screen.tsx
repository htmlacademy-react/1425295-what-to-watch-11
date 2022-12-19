import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import PromoFilm from '../../components/promo-film/promo-film';
import { useAppSelector } from '../../hooks';

function WelcomeScreen(): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);

  return(
    <>
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />
          <div className="catalog__films-list">
            <FilmList films={films}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default WelcomeScreen;
