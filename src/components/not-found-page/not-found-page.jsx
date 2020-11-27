import React from 'react';
import {Link} from 'react-router-dom';
import PageFooter from "../page-footer/page-footer";
import {AppRoute} from "../../const";

const NotFoundPage = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <div className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </div>
        </div>
      </header>

      <div className="sign-in user-page__content">
        <div className="sign-in__message">
          <p style={{marginBottom: `60px`, fontSize: `46px`}}>Page not found.</p>
          <Link to={AppRoute.ROOT} className="sign-in__btn" style={{textDecoration: `none`}}>Go to Home</Link>
        </div>
      </div>

      <PageFooter />
    </div>
  );
};

export default NotFoundPage;
