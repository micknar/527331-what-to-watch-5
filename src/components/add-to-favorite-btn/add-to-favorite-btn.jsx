import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../const/const";
import {updateFavoriteStatus} from "../../store/api-actions";
import {setIsFilmLoading} from "../../store/action";

const AddToFavoriteBtn = (props) => {
  const {id, isFavorite, authorizationStatus, onAddToFavoriteBtnClick} = props;

  return (
    <Link
      to={authorizationStatus !== AuthorizationStatus.AUTH ? AppRoute.LOGIN : ``}
      className="btn btn--list movie-card__button"
      onClick={(evt) => {
        if (authorizationStatus === AuthorizationStatus.AUTH) {
          evt.preventDefault();
          onAddToFavoriteBtnClick(id, isFavorite);
        }
      }}
    >
      {
        isFavorite
          ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list" />
          </svg>

          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add" />
          </svg>
      }

      <span>My list</span>
    </Link>
  );
};

AddToFavoriteBtn.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onAddToFavoriteBtnClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToFavoriteBtnClick(id, isFavorite) {
    dispatch(setIsFilmLoading(true));
    dispatch(updateFavoriteStatus(id, isFavorite));
  }
});

export {AddToFavoriteBtn};
export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteBtn);
