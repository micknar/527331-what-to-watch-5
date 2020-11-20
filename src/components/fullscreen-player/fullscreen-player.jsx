import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {isDouble} from "../../utils/utils.js";

const getElapsedTime = (duration, progress) => {
  const minutesElapsed = Math.floor((duration - progress) / 60);
  const secondsElapsed = Math.floor((duration - progress) % 60);
  const timeElapsed = `${isDouble(minutesElapsed)}:${isDouble(secondsElapsed)}`;

  return timeElapsed;
};

const FullscreenPlayer = (props) => {
  const {films, currentFilmId, isPlaying, duration, progress, onPlayBtnClick, onFullscreenClick, renderPlayer} = props;
  const currentFilm = films.find((film) => film.id === currentFilmId);
  const {name} = currentFilm;
  const togglerState = progress / duration * 100;

  return (
    <div className="player">
      {renderPlayer(currentFilm)}

      <Link to="/" type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: togglerState + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getElapsedTime(duration, progress)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={onPlayBtnClick} type="button" className="player__play">
            {isPlaying
              ?
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>
              :
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>
            }
          </button>

          <div className="player__name">{name}</div>

          <button onClick={onFullscreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
});

FullscreenPlayer.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  currentFilmId: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export {FullscreenPlayer};
export default connect(mapStateToProps)(FullscreenPlayer);
