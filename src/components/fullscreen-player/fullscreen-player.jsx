import React from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getElapsedTime} from "../../utils";
import {AppRoute} from "../../const";

const FullscreenPlayer = (props) => {
  const {
    films,
    promoFilm,
    currentFilmId,
    isPlaying,
    isLoading,
    duration,
    progress,
    onPlayBtnClick,
    onFullscreenBtnClick,
    renderPlayer
  } = props;

  const getCurrentFilm = () => {
    if (currentFilmId === promoFilm.id) {
      return promoFilm;
    }

    return films.find((film) => film.id === currentFilmId);
  };

  const currentFilm = getCurrentFilm();
  const {name} = currentFilm;
  const togglerState = progress / duration * 100;

  return (
    <>
      <div
        className="sign-in__message"
        style={{
          display: isLoading ? `flex` : `none`,
          justifyContent: `center`,
          opacity: isLoading ? `1` : `0`
        }}
      >
        <ReactLoading type={`bars`} color={`#dfcf77`} height={`20%`} width={`20%`} />
      </div>

      <div className="player" style={{opacity: isLoading ? `0` : `1`}}>
        {renderPlayer(currentFilm)}

        <Link to={AppRoute.ROOT} type="button" className="player__exit">Exit</Link>

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

              {
                isPlaying
                  ? <React.Fragment>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#pause"></use>
                    </svg>
                    <span>Pause</span>
                  </React.Fragment>
                  : <React.Fragment>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </React.Fragment>
              }
            </button>

            <div className="player__name">{name}</div>

            <button onClick={onFullscreenBtnClick} type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

FullscreenPlayer.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
  })).isRequired,
  promoFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
  }).isRequired,
  currentFilmId: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onFullscreenBtnClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP_STATE}) => ({
  films: APP_STATE.films,
  promoFilm: APP_STATE.promoFilm,
});

export {FullscreenPlayer};
export default connect(mapStateToProps)(FullscreenPlayer);
