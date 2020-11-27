import React from "react";
import PropTypes from "prop-types";

const VideoPreview = (props) => {
  const {previewImage, previewVideoLink} = props;

  return (
    <video
      src={previewVideoLink}
      posterbig={previewImage}
      width="280"
      height="175"
      muted
      autoPlay
    />
  );
};

VideoPreview.propTypes = {
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default VideoPreview;
