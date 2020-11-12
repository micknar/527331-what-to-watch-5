import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";
import VideoPlayer from "../video-player/video-player";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };

    this.hoverTimeout = null;

    this._handleActiveCard = this._handleActiveCard.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleActiveCard(id) {
    this.hoverTimeout = setTimeout(() =>
      this.setState({
        activeCard: id
      }), 1000);
  }

  _handleMouseLeave() {
    clearTimeout(this._hoverTimeout);
    this.hoverTimeout = null;
    this.setState({activeCard: ``});
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    const {activeCard} = this.state;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <FilmCard
              key={film.id}
              id={film.id}
              name={film.name}
              posterImage={film.posterImage}
              onFilmCardHover={this._handleActiveCard}
              onFilmCardLeave={this._handleMouseLeave}
              onFilmCardClick={onFilmCardClick}
            >
              <VideoPlayer
                muted={true}
                videoLink={film.videoLink}
                posterImage={film.posterImage}
                width="280"
                heigth="175"
                isPlaying={activeCard === film.id}
              />
            </FilmCard>
          );
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmsList;
