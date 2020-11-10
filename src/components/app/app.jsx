import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {films, promoFilm} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <Main
              promoFilm={promoFilm}
              films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route
          exact
          path="/mylist"
          render={({history}) => (
            <MyList
              films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />

        <Route
          exact
          path="/films/:id"
          render={({history}) => (
            <FilmPage
              films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />

        <Route exact path="/films/:id/review">
          <AddReview films={films} />
        </Route>

        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
};

export default App;
