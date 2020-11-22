import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player";
import PrivateRoute from "../private-route/private-route";
import withFullscreenPlayer from "../../hocs/with-fullscreen-player/with-fullscreen-player";
import withAuthData from "../../hocs/with-auth-data/with-auth-data";
import {AppRoute} from "../../const";

const FullscreenPlayerWrapped = withFullscreenPlayer(FullscreenPlayer);
const SignInWrapped = withAuthData(SignIn);

const App = () => {
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

        <Route
          exact
          path={AppRoute.REVIEW}
          render={({match}) => (
            <AddReview
              currentFilmId={+match.params.id}
            />
          )}
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

export default App;
