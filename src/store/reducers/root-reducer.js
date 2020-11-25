import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";
import {user} from "./user/user";
import {NameSpace} from "../../const";

export default combineReducers({
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user,
});
