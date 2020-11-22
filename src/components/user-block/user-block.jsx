import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";

const UserBlock = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH
          ? <div className="user-block__avatar">
            <Link to={AppRoute.MY_LIST}>
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
          : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
