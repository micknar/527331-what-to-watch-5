import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchComments} from "../../store/api-actions";
import {shadeColor} from "../../utils";

const FilmPageReviews = (props) => {
  const {comments, filmId, loadComments, backgroundColor} = props;

  useEffect(() => {
    loadComments(filmId);
  }, [filmId]);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.map((review, i) => {
          return (
            <div
              className="review"
              key={`${i}-${review.user.id}`}
              style={{borderBottomColor: shadeColor(backgroundColor, -20)}}
            >
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date.dateTime}>
                    {review.date.humanizeDate}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({APP_STATE}) => ({
  comments: APP_STATE.comments,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchComments(id));
  }
});

FilmPageReviews.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.shape({
      humanizeDate: PropTypes.string.isRequired,
      dateTime: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  filmId: PropTypes.number.isRequired,
  loadComments: PropTypes.func.isRequired,
};

export {FilmPageReviews};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPageReviews);
