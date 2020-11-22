import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";
import {user} from "./user/user";

export const NameSpace = {
  APP_STATE: `APP_STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user,
});
