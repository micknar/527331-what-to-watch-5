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
      const {muted, videoLink, previewImage, width, height} = this.props;
      const video = this.videoRef.current;

      video.muted = muted;
      video.src = videoLink;
      video.poster = previewImage;
      video.width = width;
      video.height = height;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      video.oncanplaythrough = null;
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

      if (this.props.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }

    render() {
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
        >
          <video ref={this.videoRef} />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    muted: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
