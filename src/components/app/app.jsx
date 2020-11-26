import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {connect} from "react-redux";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player";
import PrivateRoute from "../private-route/private-route";
import LoadingPage from "../loading-page/loading-page";
import ErrorPage from "../error-page/error-page";
import withFullscreenPlayer from "../../hocs/with-fullscreen-player/with-fullscreen-player";
import withAuthData from "../../hocs/with-auth-data/with-auth-data";
import {AppRoute} from "../../const";

const FullscreenPlayerWrapped = withFullscreenPlayer(FullscreenPlayer);
const SignInWrapped = withAuthData(SignIn);

const App = (props) => {
  const {isFilmsLoading, isPromoLoading, isLoadingError, isCheckingAuth} = props;

  if (isCheckingAuth || isFilmsLoading || isPromoLoading) {
    return (
      <LoadingPage />
    );
  } else if (isLoadingError) {
    return (
      <ErrorPage />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <Main
              onFilmCardClick={(id) => history.push(AppRoute.FILMS + id)}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.LOGIN}
          render={({history}) => (
            <SignInWrapped
              onFilmCardClick={(id) => history.push(AppRoute.FILMS + id)}
            />
          )}
        />

        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={({history}) => {
            return (
              <MyList
                onFilmCardClick={(id) => history.push(AppRoute.FILMS + id)}
              />
            );
          }}
        />

        <Route
          exact
          path={AppRoute.FILMS_ID}
          render={({history, match}) => (
            <FilmPage
              currentFilmId={+match.params.id}
              onFilmCardClick={(id) => history.push(AppRoute.FILMS + id)}
            />
          )}
        />

        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={({match}) => {
            return (
              <AddReview
                currentFilmId={+match.params.id}
              />
            );
          }}
        />

        <Route
          exact
          path={AppRoute.PLAYER_ID}
          render={({match}) => (
            <FullscreenPlayerWrapped
              currentFilmId={+match.params.id}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({APP_STATE}) => ({
  isFilmsLoading: APP_STATE.isFilmsLoading,
  isPromoLoading: APP_STATE.isPromoLoading,
  isLoadingError: APP_STATE.isLoadingError,
  isCheckingAuth: APP_STATE.isCheckingAuth,
});

App.propTypes = {
  isFilmsLoading: PropTypes.bool.isRequired,
  isPromoLoading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  isCheckingAuth: PropTypes.bool.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
