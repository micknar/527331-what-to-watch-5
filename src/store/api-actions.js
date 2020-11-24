import {
  loadFilms,
  loadPromo,
  loadFavoriteFilms,
  loadComments,
  requireAuthorization,
  redirectToRoute,
  setIsFilmsLoading,
  setIsPromoLoading,
  setIsLoadingError,
  setUserAvatar,
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

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({data}) => {
      dispatch(loadFavoriteFilms(data.map(adaptFilmToClient)));
    })
    .catch(() => {})
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({data}) => {
      dispatch(loadComments(data.map(adaptCommentToClient)));
    })
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserAvatar(data[`avatar_url`]));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserAvatar(data[`avatar_url`]));
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
);
