import { GENRES } from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { changeGenre } from '../../store/action';
import { State } from '../../types/state';

function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state: State) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ''}`}>
          <span
            className="catalog__genres-link"
            onClick={() => dispatch(changeGenre(genre))}
          >
            {genre}
          </span>
        </li>))}

    </ul>
  );
}

export default GenresList;
