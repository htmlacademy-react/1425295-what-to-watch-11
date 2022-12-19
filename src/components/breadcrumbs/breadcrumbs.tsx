import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavouriteMyListAction, postFavouriteStatusAction } from '../../store/api-actions';

function Breadcrumbs():JSX.Element {
  const film = useAppSelector((state) => state.film);
  const films = useAppSelector((state) => state.favouriteList);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const [isFavourite, setisFavourite] = useState(film.isFavorite);

  const onClick = () => {
    isFavourite ? dispatch(postFavouriteStatusAction([film.id, 0]))
      :
      dispatch(postFavouriteStatusAction([film.id, 1]));
    dispatch(fetchFavouriteMyListAction());

    setisFavourite(!isFavourite);
  };

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button" onClick={onClick}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={`${isFavourite ? '#in-list' : '#add'}`}></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">{films.length}</span>
      </button>
      {authorizationStatus === AuthorizationStatus.Auth && <Link to={AppRoute.Review} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default Breadcrumbs;
