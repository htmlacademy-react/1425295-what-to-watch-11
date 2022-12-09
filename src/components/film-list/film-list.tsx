import { GENRE_DEFAULT } from '../../const';
import { useAppSelector } from '../../hooks';
import { State } from '../../types/state';
import FilmsCard from '../films-card/films-card';

function FilmList(): JSX.Element {
  const currentGenre = useAppSelector((state: State) => state.genre);
  const films = useAppSelector((state) => state.filmsList);

  const filteredFilms = currentGenre === GENRE_DEFAULT ? films
    : films.filter((film) => film.genre === currentGenre);

  return (
    <div className="catalog__films-list">
      {filteredFilms.map((film) => <FilmsCard key={film.id} currentFilm={film} />)}
    </div>
  );
}

export default FilmList;
