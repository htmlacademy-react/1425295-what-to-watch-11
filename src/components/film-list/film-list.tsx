import { GENRE_DEFAULT } from '../../const';
import { useAppSelector } from '../../hooks';
import { filmDescription } from '../../types/film';
import { State } from '../../types/state';
import FilmsCard from '../films-card/films-card';

type FilmProps = {
  films: filmDescription[];
};

function FilmList({films} : FilmProps): JSX.Element {
  const currentFilms = useAppSelector((state: State) => state.filmsList);
  const currentGenre = useAppSelector((state: State) => state.genre);

  function getFilms(genre:string){
    if (genre === GENRE_DEFAULT){
      return films;
    }
    return films.filter((film) => film.genre === currentGenre);
  }
  const shownFilms = getFilms(currentGenre).slice(0, currentFilms.length);

  return (
    <div className="catalog__films-list">
      {shownFilms.map((film) => <FilmsCard key={film.id} currentFilm={film} />)}
    </div>
  );
}

export default FilmList;
