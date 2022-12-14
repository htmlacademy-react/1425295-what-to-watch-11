import { useState } from 'react';
import { Link } from 'react-router-dom';
import { filmDescription } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmProps = {
currentFilm: filmDescription;
}

function FilmsCard({currentFilm}: FilmProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const onMouseHandlerCard = () => {
    setIsPlaying(true);
  };
  const onMouseLeaveHandlerCard = () => {
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseHandlerCard()}
      onMouseLeave={() => onMouseLeaveHandlerCard()}
    >
      <div className="small-film-card__image">
        {isPlaying ? <VideoPlayer posterImage={currentFilm.posterImage} videoLink={currentFilm.videoLink} isPlaying={isPlaying}/>
          : <img src={currentFilm.previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${currentFilm.id}`}>{currentFilm.name}</Link>
      </h3>
    </article>
  );
}

export default FilmsCard;
