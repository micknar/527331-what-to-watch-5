import {
  loadFilms,
  loadPromo,
  loadFilmById,
  loadFavoriteFilms,
  loadComments,
  requireAuthorization,
  redirectToRoute,
  setIsCheckingAuth,
  setIsFilmsLoading,
  setIsPromoLoading,
  setIsFilmLoading,
  setIsLoadingError,
  setUserAvatar,
  setIsReviewSubmitting,
  setIsReviewSubmittingError,
  setIsLoginDataSending,
  setIsLoginError,
} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";
import {setFavoriteStatus} from "../utils";
import {adaptFilmToClient, adaptCommentToClient} from "../services/adapter";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(data.map(adaptFilmToClient)));
      dispatch(setIsFilmsLoading(false));
    })
    .catch(() => {
      dispatch(setIsFilmsLoading(false));
      dispatch(setIsLoadingError(true));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => {
      dispatch(loadPromo(adaptFilmToClient(data)));
      dispatch(setIsPromoLoading(false));
    })
    .catch(() => {
      dispatch(setIsPromoLoading(false));
      dispatch(setIsLoadingError(true));
    })
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + id)
    .then(({data}) => {
      dispatch(loadFilmById(adaptFilmToClient(data)));
      dispatch(setIsFilmLoading(false));
    })
    .catch(() => {})
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({data}) => {
      dispatch(loadFavoriteFilms(data.map(adaptFilmToClient)));
    })
    .catch(() => {})
);

export const updateFavoriteStatus = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE_FILMS}/${id}/${setFavoriteStatus(isFavorite)}`)
    .then(() => {
      dispatch(fetchFilmById(id));
      dispatch(fetchPromoFilm());
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({data}) => {
      dispatch(loadComments(data.map(adaptCommentToClient)));
    })
    .catch(() => {})
);

export const submitReview = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + id, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(AppRoute.FILMS + id));
      dispatch(setIsReviewSubmitting(false));
    })
    .catch(() => {
      dispatch(setIsReviewSubmitting(false));
      dispatch(setIsReviewSubmittingError(true));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserAvatar(data[`avatar_url`]));
      dispatch(setIsCheckingAuth(false));
    })
    .catch(() => {
      dispatch(setIsCheckingAuth(false));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserAvatar(data[`avatar_url`]));
      dispatch(setIsLoginDataSending(false));
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
    .catch(() => {
      dispatch(setIsLoginDataSending(false));
      dispatch(setIsLoginError(true));
    })
);
