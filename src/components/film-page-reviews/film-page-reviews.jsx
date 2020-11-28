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
        {comments.map((comment, i) => {
          return (
            <div
              className="review"
              key={`${i}-${comment.user.id}`}
              style={{borderBottomColor: shadeColor(backgroundColor, -20)}}
            >
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={comment.date.dateTime}>
                    {comment.date.humanizeDate}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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

const mapStateToProps = ({APP_STATE}) => ({
  comments: APP_STATE.comments,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchComments(id));
  }
});

export {FilmPageReviews};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPageReviews);
