import { useAppSelector } from '../../hooks';
import FilmsCard from '../films-card/films-card';

function MoreFilms(): JSX.Element {
  const similarFilms = useAppSelector((state) => state.similarFilms);
  return (
    <div className="catalog__films-list">
      {similarFilms.map((film) => <FilmsCard key={film.id} currentFilm={film}/>).slice(0, 4)}
    </div>
  );
}

export default MoreFilms;
