import { GENRE_DEFAULT } from '../../const';
import { useAppSelector } from '../../hooks';
import { filmDescription } from '../../types/film';
import { State } from '../../types/state';
import FilmsCard from '../films-card/films-card';

type FilmProps = {
  films: filmDescription[];
};

function FilmList({films} : FilmProps): JSX.Element {
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
