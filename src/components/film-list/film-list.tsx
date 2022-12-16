import { GENRE_DEFAULT } from '../../const';
import { useAppSelector } from '../../hooks';
import { Films } from '../../types/film';
import { State } from '../../types/state';
import FilmsCard from '../films-card/films-card';

function FilmList({films}: {films:Films}): JSX.Element {
  const currentGenre = useAppSelector((state: State) => state.genre);

  const filteredFilms = currentGenre === GENRE_DEFAULT ? films
    : films.filter((film) => film.genre === currentGenre);

  return (
    <div className="catalog__films-list">
      {filteredFilms.map((film) => <FilmsCard key={film.id} currentFilm={film} />)}
    </div>
  );
}

export default FilmList;
