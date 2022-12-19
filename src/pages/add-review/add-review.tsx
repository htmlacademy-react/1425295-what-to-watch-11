import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import MessageForm from '../../components/message-form/message-form';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

function AddReview(): JSX.Element {
  const film = useAppSelector((state) => state.film);

  if (!film) {
    return <LoadingScreen />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Review} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <MessageForm />
      </div>

    </section>
  );
}

export default AddReview;
