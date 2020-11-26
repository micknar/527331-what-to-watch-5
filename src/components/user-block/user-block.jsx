import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";

const UserBlock = (props) => {
  const {authorizationStatus, avatar} = props;

  return (
    <div className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH
          ? <div className="user-block__avatar">
            <Link to={AppRoute.MY_LIST}>
              <img src={avatar} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
          : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  avatar: USER.userAvatar,
});

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
