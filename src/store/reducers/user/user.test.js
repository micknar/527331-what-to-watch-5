import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {login, fetchFavoriteFilms, updateFavoriteStatus} from "../../api-actions";
import {APIRoute, AppRoute, AuthorizationStatus, HttpCode, FavoriteStatusCode} from "../../../const/const";
import {noop, films, userInfo, filmsFromServer} from "../../../test-mocks";

const api = createAPI(noop);

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: ``,
  favoriteFilms: [],
  isLoginDataSending: false,
  isLoginError: false,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual(initialState);
});

describe(`User reducer should update state`, () => {
  it(`Reducer should update authorizationStatus to "auth"`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`Should load user avatar`, () => {
    expect(user(initialState, {
      type: ActionType.SET_USER_AVATAR,
      payload: userInfo[`avatar_url`],
    })).toEqual(Object.assign({}, initialState, {
      userAvatar: userInfo[`avatar_url`],
    }));
  });

  it(`Should load favorite films`, () => {
    expect(user(initialState, {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    })).toEqual(Object.assign({}, initialState, {
      favoriteFilms: films,
    }));
  });

  it(`When is login data sending`, () => {
    expect(user(initialState, {
      type: ActionType.SET_IS_LOGIN_DATA_SENDING,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isLoginDataSending: true,
    }));
  });

  it(`When is login error`, () => {
    expect(user(initialState, {
      type: ActionType.SET_IS_LOGIN_ERROR,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {
      isLoginError: true,
    }));
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE_FILMS)
      .reply(HttpCode.OK, filmsFromServer);

    return favoriteFilmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: films,
        });
      });
  });

  it(`Should make a correct API call to /favorite/:film_id/:status (post)`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const favoriteFilmUploader = updateFavoriteStatus(id, false);

    apiMock
      .onPost(`${APIRoute.FAVORITE_FILMS}/${id}/${FavoriteStatusCode.ADD}`)
      .reply(HttpCode.OK, filmsFromServer);

    return favoriteFilmUploader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a correct API call to /login (post)`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(HttpCode.OK, userInfo);

    return loginLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_AVATAR,
          payload: userInfo[`avatar_url`],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_LOGIN_DATA_SENDING,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_LOGIN_DATA_SENDING,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_LOGIN_ERROR,
          payload: true,
        });
      });
  });
});
