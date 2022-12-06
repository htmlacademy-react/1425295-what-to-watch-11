import { filmDescription } from '../../types/film';
import FilmsCard from '../films-card/films-card';

type FilmProps = {
  films: filmDescription[];
};

function MoreFilms({films}: FilmProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmsCard key={film.id} currentFilm={film}/>).slice(0, 4)}
    </div>
  );
}

export default MoreFilms;


