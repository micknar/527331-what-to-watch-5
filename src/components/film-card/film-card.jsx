import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPreview from "../video-preview/video-preview";
import {AppRoute} from "../../const";

const FilmCard = (props) => {
  const {id, name, previewImage, previewVideoLink, onFilmCardClick, onFilmCardHover, onFilmCardLeave, isActive} = props;

  return (
    <article
      data-id={id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onFilmCardHover(id)}
      onMouseOut={() => onFilmCardLeave()}
      onClick={() => onFilmCardClick(id)}
    >
      <div className="small-movie-card__image">
        {
          isActive
            ? <VideoPreview previewVideoLink={previewVideoLink} previewImage={previewImage} />
            : <img src={previewImage} alt={name} width="280" height="175" />
        }
      </div>

      <h3 className="small-movie-card__title">
        <Link to={AppRoute.FILMS + id} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardHover: PropTypes.func.isRequired,
  onFilmCardLeave: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default FilmCard;
