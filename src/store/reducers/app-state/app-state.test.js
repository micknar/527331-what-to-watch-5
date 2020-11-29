import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {appState} from "./app-state";
import {ActionType} from "../../action";
import {fetchFilmsList, fetchPromoFilm, fetchFilmById, fetchComments, submitReview, checkAuth} from "../../api-actions";
import {APIRoute, AppRoute, AuthorizationStatus, HttpCode, FilmsCount} from "../../../const/const";
import {noop, films, comments, userInfo, filmsFromServer, commentFromServer} from "../../../test-mocks";

const api = createAPI(noop);

const initialState = {
  films: [],
  promoFilm: {},
  film: {},
  activeGenre: `All genres`,
  filteredFilms: [],
  comments: [],
  renderedFilmsCount: FilmsCount.PER_STEP,
  isCheckingAuth: true,
  isFilmsLoading: true,
  isPromoLoading: true,
  isFilmLoading: true,
  isLoadingError: false,
  isReviewSubmitting: false,
  isReviewSubmittingError: false,
};

const activeGenre = `Dramas`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appState(void 0, {})).toEqual(initialState);
});

describe(`App state reducer should update state`, () => {
  it(`Should load films`, () => {
    expect(appState(initialState, {
      type: ActionType.LOAD_FILMS,
      payload: films,
    })).toEqual(Object.assign({}, initialState, {
      films,
      filteredFilms: films,
    }));
  });

  it(`Should load promo film`, () => {
    expect(appState(initialState, {
      type: ActionType.LOAD_PROMO,
      payload: films[0],
    })).toEqual(Object.assign({}, initialState, {
      promoFilm: films[0],
    }));
  });

  it(`Should load film by id`, () => {
    expect(appState(initialState, {
      type: ActionType.LOAD_FILM_BY_ID,
      payload: films[0],
    })).toEqual(Object.assign({}, initialState, {
      film: films[0],
    }));
  });

  it(`Should load comments`, () => {
    expect(appState(initialState, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    })).toEqual(Object.assign({}, initialState, {
      comments,
    }));
  });

  it(`Should change active genre on filter`, () => {
    expect(appState(initialState, {
      type: ActionType.CHANGE_GENRE,
      payload: activeGenre,
    })).toEqual(Object.assign({}, initialState, {
      activeGenre,
    }));
  });

  it(`Should increase rendered films count`, () => {
    expect(appState(initialState, {
      type: ActionType.SHOW_MORE_FILMS
    })).toEqual(Object.assign({}, initialState, {
      renderedFilmsCount: FilmsCount.PER_STEP,
    }));
  });

  it(`Should reset rendered films count`, () => {
    expect(appState(initialState, {
      type: ActionType.CLEAR_RENDERED_FILMS
    })).toEqual(Object.assign({}, initialState, {
      renderedFilmsCount: FilmsCount.PER_STEP,
    }));
  });

  it(`While is checking auth`, () => {
    expect(appState(initialState, {
      type: ActionType.SET_IS_CHECKING_AUTH,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isCheckingAuth: true,
    }));
  });

  it(`While films are loading`, () => {
    expect(appState(initialState, {
      type: ActionType.SET_IS_FILMS_LOADING,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isFilmsLoading: true,
    }));
  });

  it(`While promo film is loading`, () => {
    expect(appState(initialState, {
      type: ActionType.SET_IS_PROMO_LOADING,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isPromoLoading: true,
    }));
  });

  it(`While film is loading`, () => {
    expect(appState(initialState, {
      type: ActionType.SET_IS_FILM_LOADING,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isFilmLoading: true,
    }));
  });

  it(`When is loading error`, () => {
    expect(appState(initialState, {
      type: ActionType.SET_IS_LOADING_ERROR,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isLoadingError: true,
    }));
  });

  it(`While review is submitting`, () => {
    expect(appState(initialState, {
      type: ActionType.SET_IS_REVIEW_SUBMITTING,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isReviewSubmitting: true,
    }));
  });

  it(`When is review submitting error`, () => {
    expect(appState(initialState, {
      type: ActionType.SET_IS_REVIEW_SUBMITTING_ERROR,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isReviewSubmittingError: true,
    }));
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(HttpCode.OK, filmsFromServer[0]);

    return filmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: films,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_LOADING_ERROR,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO_FILM)
      .reply(HttpCode.OK, filmsFromServer[0]);

    return promoFilmLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: films[0],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_PROMO_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_PROMO_LOADING,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_LOADING_ERROR,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const filmLoader = fetchFilmById(id);

    apiMock
      .onGet(APIRoute.FILMS + id)
      .reply(HttpCode.OK, filmsFromServer[0]);

    return filmLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_BY_ID,
          payload: films[0],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_FILM_LOADING,
          payload: false,
        });
      });
  });

  it(`Should make a correct API call to /comments/:id (get)`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const commentsLoader = fetchComments(id);

    apiMock
      .onGet(APIRoute.COMMENTS + id)
      .reply(HttpCode.OK, commentFromServer);

    return commentsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: comments,
        });
      });
  });

  it(`Should make a correct API call to /comments/:id (post)`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fakeComment = {
      rating: 5,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    };
    const reviewUploader = submitReview(id, fakeComment);

    apiMock
      .onPost(APIRoute.COMMENTS + id)
      .reply(HttpCode.OK, {fake: true});

    return reviewUploader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.FILMS + id,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_REVIEW_SUBMITTING,
          payload: false,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_REVIEW_SUBMITTING,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_REVIEW_SUBMITTING_ERROR,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to /login (get)`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(HttpCode.OK, userInfo);

    return checkAuthLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_AVATAR,
          payload: userInfo[`avatar_url`],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_CHECKING_AUTH,
          payload: false,
        });
      });
  });
});
