import React from 'react';
import { filmDescription } from '../../types/film';


function TabOverview({ film }: { film: filmDescription[] }):JSX.Element {

  return(
    <React.StrictMode>
      <div className="film-rating">
        <div className="film-rating__score">{film[0].rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film[0].description}</p>
        <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>
        <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
      </div>
    </React.StrictMode>
  );
}

export default TabOverview;
