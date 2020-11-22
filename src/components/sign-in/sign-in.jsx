import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import PageFooter from "../page-footer/page-footer";
import {login} from "../../store/api-actions";

const SignIn = (props) => {
  const {email, password, onSubmit, handleTextChange} = props;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: email,
      password,
    });
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
          onSubmit={handleFormSubmit}
          className="sign-in__form"
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                onChange={handleTextChange}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                onChange={handleTextChange}
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
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
};

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
