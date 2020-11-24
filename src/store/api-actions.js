import {
  loadFilms,
  loadPromo,
  loadComments,
  requireAuthorization,
  redirectToRoute,
  setIsFilmsLoading,
  setIsPromoLoading,
  setIsLoadingError,
} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";
import {adaptFilmToClient, adaptCommentToClient} from "../services/adapter";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(setIsFilmsLoading(false));
      dispatch(loadFilms(data.map(adaptFilmToClient)));
    })
    .catch(() => {
      dispatch(setIsFilmsLoading(false));
      dispatch(setIsLoadingError(true));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => {
      dispatch(setIsPromoLoading(false));
      dispatch(loadPromo(adaptFilmToClient(data)));
    })
    .catch(() => {
      dispatch(setIsPromoLoading(false));
      dispatch(setIsLoadingError(true));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({data}) => dispatch(loadComments(data.map(adaptCommentToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MY_LIST)))
);
