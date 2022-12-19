import FilmsCard from '../../components/films-card/films-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.favouriteList);


  return(
    <div className="user-page">
      <Header className='user-page__head'>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map((film) => <FilmsCard key={film.id} currentFilm={film} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
