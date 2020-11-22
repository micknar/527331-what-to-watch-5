import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {showMoreFilms} from "../../store/action";

const ShowMoreBtn = (props) => {
  const {onShowMoreBtnClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreBtnClick}
      >Show more</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreBtnClick() {
    dispatch(showMoreFilms());
  }
});

ShowMoreBtn.propTypes = {
  onShowMoreBtnClick: PropTypes.func.isRequired,
};

export {ShowMoreBtn};
export default connect(null, mapDispatchToProps)(ShowMoreBtn);
