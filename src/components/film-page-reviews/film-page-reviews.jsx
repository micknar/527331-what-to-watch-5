import React from "react";
import PropTypes from "prop-types";

const date = (review) => `${review.date.year}-${review.date.monthNumber}-${review.date.day}`;

const FilmPageReviews = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, i) => {
          return (
            <div className="review" key={`${i}-${review.user.id}`}>
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={date(review)}>
                    {review.date.month} {review.date.day}, {review.date.year}
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

FilmPageReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.shape({
      day: PropTypes.number.isRequired,
      month: PropTypes.string.isRequired,
      monthNumber: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    }),
  }))
};

export default FilmPageReviews;
