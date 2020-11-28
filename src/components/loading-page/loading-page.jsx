import React from "react";
import ReactLoading from "react-loading";
import PageFooter from "../page-footer/page-footer";

const LoadingPage = () => {
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
        <div className="sign-in__message" style={{display: `flex`, justifyContent: `center`}} >
          <ReactLoading
            type={`bars`}
            color={`#dfcf77`}
            height={`20%`}
            width={`20%`} />
        </div>
      </div>

      <PageFooter />
    </div>
  );
};

export default LoadingPage;
