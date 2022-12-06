import { GENRES } from '../../const';
import {useAppDispatch} from '../../hooks';
import { changeGenre } from '../../store/action';

function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => (
        // eslint-disable-next-line no-console
        <li key={genre} className="catalog__genres-item catalog__genres-item--active">
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
