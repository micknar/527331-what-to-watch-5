import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";
import VideoPlayer from "../video-player/video-player";
import withVideo from "../../hocs/with-video/with-video";

const VideoPlayerWrapped = withVideo(VideoPlayer);

const FilmsList = (props) => {
  const {films, onFilmCardClick, activeCard, handleActiveCard, handleMouseLeave} = props;

  return (
    <div className="catalog__movies-list">

      {films.map((film) => {
        return (
          <FilmCard
            key={film.id}
            id={film.id}
            name={film.name}
            posterImage={film.previewImage}
            onFilmCardHover={handleActiveCard}
            onFilmCardLeave={handleMouseLeave}
            onFilmCardClick={onFilmCardClick}
          >
            <div className="small-movie-card__image">
              <VideoPlayerWrapped
                muted={true}
                videoLink={film.videoLink}
                previewImage={film.previewImage}
                width="280"
                height="175"
                isPlaying={activeCard === film.id}
              />
            </div>
          </FilmCard>
        );
      })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired,
  handleActiveCard: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

export default FilmsList;
