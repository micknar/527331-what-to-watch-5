import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player";
import PrivateRoute from "../private-route/private-route";
import withFullscreenPlayer from "../../hocs/with-fullscreen-player/with-fullscreen-player";
import withAuthData from "../../hocs/with-auth-data/with-auth-data";

const FullscreenPlayerWrapped = withFullscreenPlayer(FullscreenPlayer);
const SignInWrapped = withAuthData(SignIn);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <Main
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />

        <Route
          exact
          path="/login"
          render={({history}) => (
            <SignInWrapped
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />

        <PrivateRoute
          exact
          path={`/mylist`}
          render={({history}) => {
            return (
              <MyList
                onFilmCardClick={(id) => history.push(`/films/${id}`)}
              />
            );
          }}
        />

        <Route
          exact
          path="/films/:id"
          render={({history, match}) => (
            <FilmPage
              currentFilmId={+match.params.id}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />

        <Route exact path="/films/:id/review"
          render={({match}) => (
            <AddReview
              currentFilmId={+match.params.id}
            />
          )}
        />

        <Route
          exact
          path="/player/:id"
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
