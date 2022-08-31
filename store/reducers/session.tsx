import { SET_INVESTOR_TYPE, SET_ORGANIZATION_TYPE } from "../actionTypes";

const initialState = {
  investorType: {
    selectedType: "",
  },
  organizationType: {
    selectedType: "",
  },
};

export const InvestorType = (
  state = initialState.investorType,
  action: any
) => {
  switch (action.type) {
    case SET_INVESTOR_TYPE:
      return { ...state, selectedType: action.investorType };
    default:
      return state;
  }
};

export const OrganizationType = (
  state = initialState.organizationType,
  action: any
) => {
  switch (action.type) {
    case SET_ORGANIZATION_TYPE:
      return { selectedType: action.organizationType };
    default:
      return state;
  }
};
