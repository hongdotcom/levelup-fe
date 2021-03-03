import { combineReducers } from "redux";
import { googleReducer } from "./ReducerGoogle";
import { facebookReducer } from "./ReducerFacebook";
const rootReducer = combineReducers({
  googleReducer,
  facebookReducer,
});

export default rootReducer;
