import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  ratingMark: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
  }),
  genre: PropTypes.string,
  released: PropTypes.number,
  isFavorite: PropTypes.bool,
});
