import React, {PureComponent, createRef} from "react";

const withFullscreenPlayer = (Component) => {
  class WithFullscreenPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.handlePlayBtnClick = this.handlePlayBtnClick.bind(this);
      this.handleFullscreenBtnClick = this.handleFullscreenBtnClick.bind(this);

      this.videoRef = createRef();

      this.state = {
        isPlaying: true,
        duration: 0,
        progress: 0,
      };
    }

    handlePlayBtnClick() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }

    handleFullscreenBtnClick() {
      this.videoRef.current.requestFullscreen();
    }

    componentDidMount() {
      this.videoRef.current.oncanplay = () => {
        this.setState({
          duration: Math.floor(this.videoRef.current.duration),
        });
      };

      this.videoRef.current.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(this.videoRef.current.currentTime),
        });
      };
    }

    componentDidUpdate() {
      if (this.state.isPlaying) {
        this.videoRef.current.play();
      } else {
        this.videoRef.current.pause();
      }
    }

    componentWillUnmount() {
      this.videoRef.current.oncanplay = null;
      this.videoRef.current.ontimeupdate = null;
    }

    render() {
      const {isPlaying, duration, progress} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlayBtnClick={this.handlePlayBtnClick}
          onFullscreenClick={this.handleFullscreenBtnClick}
          renderPlayer={(film) => {
            return (
              <video
                className="player__video"
                ref={this.videoRef}
                src={film.videoLink}
                image={film.previewImage}
              ></video>
            );
          }}
        />
      );
    }
  }
  return WithFullscreenPlayer;
};

export default withFullscreenPlayer;
