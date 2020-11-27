import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPreview from "../video-preview/video-preview";
import {AppRoute} from "../../const";

const FilmCard = (props) => {
  const {id, name, previewImage, previewVideoLink, onCardClick, onCardMouseOver, onCardMouseOut, isActive} = props;

  return (
    <article
      data-id={id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onCardMouseOver(id)}
      onMouseOut={() => onCardMouseOut()}
      onClick={() => onCardClick(id)}
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
  onCardClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default FilmCard;
