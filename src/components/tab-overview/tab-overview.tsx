import React from 'react';
import { filmDescription } from '../../types/film';

type OverviewProps = {
  film: filmDescription;
}


function TabOverview({ film }: OverviewProps):JSX.Element {

  return(
    <React.StrictMode>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level"></span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>{film.director}</strong></p>
        <p className="film-card__starring"><strong>{film.starring}</strong></p>
      </div>
    </React.StrictMode>
  );
}

export default TabOverview;
