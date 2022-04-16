import { SET_INDIVIDUAL_PAGE, SET_ORGANIZATION_PAGE } from "../actionTypes";

const initialState = {
  individual: {
    page: 2
  },
  organization: {
    page: 1
  },
};

export const Individual = (state = initialState.individual, action: any) => {
  switch (action.type) {
    case SET_INDIVIDUAL_PAGE:
      return { ...state, page: action.individualPage };
    default:
      return state;
  }
};

export const Organization = (state = initialState.organization, action: any) => {
  switch (action.type) {
    case SET_ORGANIZATION_PAGE:
      return { ...state, page: action.organizationPage };
    default:
      return state;
  }
};
