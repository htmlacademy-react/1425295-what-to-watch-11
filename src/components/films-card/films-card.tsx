/* eslint-disable no-console */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_ACTIVE_CARD } from '../../const';
import { filmDescription } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmProps = {
film: filmDescription;
setActiveCard: (value: number) => void;
}

function FilmsCard({film, setActiveCard}: FilmProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);

  const onMouseHandlerCard = () => {
    setActiveCard(film.id);
    setTimeout(() => setIsPlaying(true), 1000);
  };
  const onMouseLeaveHandlerCard = () => {
    setActiveCard(DEFAULT_ACTIVE_CARD);
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseHandlerCard()}
      onMouseLeave={() => onMouseLeaveHandlerCard()}
    >
      <div className="small-film-card__image">
        {isPlaying ? <VideoPlayer posterImage={film.posterImage} videoLink={film.videoLink} isPlaying={isPlaying}/>
          : <img src={film.previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmsCard;

