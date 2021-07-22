import { combineReducers } from "redux";

import user from "./userReducer";

const rootReducer: any = combineReducers({
  user
});

export default rootReducer;