import React from "react";
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import {connect} from "react-redux";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import PageFooter from "../page-footer/page-footer";
import {login} from "../../store/api-actions";
import {setIsLoginDataSending} from "../../store/action";

const getFieldClassName = (isValid) => isValid ? `sign-in__field` : `sign-in__field sign-in__field--error`;

const SignIn = (props) => {
  const {
    email,
    password,
    sendData,
    onInputChange,
    onFormSubmit,
    isValidEmail,
    isValidPassword,
    isLoginDataSending,
    isLoginError
  } = props;

  const onSignInBtnClick = (evt) => {
    evt.preventDefault();

    sendData({
      login: email,
      password,
    });
  };

  const getMessage = () => {
    if (isLoginDataSending) {
      return (
        <div
          className="sign-in__message"
          style={{display: `flex`, justifyContent: `center`, marginBottom: `20px`}}
        >
          <ReactLoading type={`bars`} color={`#dfcf77`} height={`10%`} width={`10%`} />
        </div>
      );
    } else if (!isValidEmail) {
      return (
        <div className="sign-in__message" >
          <p>Please enter a valid email address</p>
        </div>
      );
    } else if (!isValidPassword) {
      return (
        <div className="sign-in__message" >
          <p>Please enter a valid password</p>
        </div>
      );
    } else if (isLoginError) {
      return (
        <div className="sign-in__message" >
          <p>We can’t recognize this email</p>
          <p>and password combination. Please try again.</p>
        </div>
      );
    } else {
      return ``;
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageHeaderLogo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          onSubmit={onFormSubmit}
          className="sign-in__form"
        >
          {getMessage()}
          <div className="sign-in__fields">
            <div className={getFieldClassName(isValidEmail)}>
              <input
                onChange={onInputChange}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={getFieldClassName(isValidPassword)}>
              <input
                onChange={onInputChange}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              disabled={!isValidPassword}
              onClick={onSignInBtnClick}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sendData: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isValidEmail: PropTypes.bool.isRequired,
  isValidPassword: PropTypes.bool.isRequired,
  isLoginDataSending: PropTypes.bool.isRequired,
  isLoginError: PropTypes.bool.isRequired,
};

const mapStateToProps = ({USER}) => ({
  isLoginDataSending: USER.isLoginDataSending,
  isLoginError: USER.isLoginError,
});

const mapDispatchToProps = (dispatch) => ({
  sendData(authData) {
    dispatch(setIsLoginDataSending(true));
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
