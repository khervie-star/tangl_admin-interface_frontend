import { combineReducers } from "redux";
import { Individual, Organization } from "./page";
import { InvestorType, OrganizationType } from "./session";
import { register } from "./register";

const rootReducer = combineReducers({
  Individual,
  Organization,
  InvestorType,
  OrganizationType,
  register
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
