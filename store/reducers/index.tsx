import { combineReducers } from "redux";
import { individual, organization } from "./page";

const rootReducer = combineReducers({
  individual,
  organization,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
