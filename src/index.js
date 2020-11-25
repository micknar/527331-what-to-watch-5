import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import App from './components/app/app';
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization, setIsFilmsLoading, setIsPromoLoading} from "./store/action";
import {fetchFilmsList, fetchPromoFilm, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchPromoFilm()),
  store.dispatch(fetchFilmsList()),
  store.dispatch(checkAuth()),
])
  .then(() => {
    store.dispatch(setIsPromoLoading(false));
    store.dispatch(setIsFilmsLoading(false));
  })
  .catch(() => {});

  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
