import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {AuthorizationStatus} from "../../../const/const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: ``,
  favoriteFilms: [],
  isLoginDataSending: false,
  isLoginError: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_USER_AVATAR:
      return extend(state, {
        userAvatar: action.payload,
      });

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });

    case ActionType.SET_IS_LOGIN_DATA_SENDING:
      return extend(state, {
        isLoginDataSending: action.payload,
      });

    case ActionType.SET_IS_LOGIN_ERROR:
      return extend(state, {
        isLoginError: action.payload,
      });
  }

  return state;
};

export {user};
