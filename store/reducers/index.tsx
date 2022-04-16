import { combineReducers } from "redux";
import { Individual, Organization } from "./page";
import { InvestorType, OrganizationType } from "./session";

const rootReducer = combineReducers({
  Individual,
  Organization,
  InvestorType,
  OrganizationType
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
