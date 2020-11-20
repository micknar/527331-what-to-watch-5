import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {

    constructor(props) {
      super(props);

      this.videoRef = createRef();

      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const {muted, videoLink, posterImage, width, heigth} = this.props;
      const video = this.videoRef.current;

      video.muted = muted;
      video.src = videoLink;
      video.poster = posterImage;
      video.width = width;
      video.heigth = heigth;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      video.oncanplaythrough = null;
    }

    render() {
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
        >
          <video
            ref={this.videoRef}
          />
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

      if (this.props.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  WithVideo.propTypes = {
    muted: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    heigth: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
