import { SET_WAITLIST_TYPE } from "../actionTypes";
import { waitlistTypes } from "../types";

const initialState: waitlistTypes = {
  email: "",
  fullname: "",
  country: "",
  update_status: null,
};

export const waitlist = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_WAITLIST_TYPE:
      return {
        ...state,

        email: action.data.email,
        fullname: action.data.fullname,
        country: action.data.country,
        update_status: action.data.update_status,
      };
    default:
      return state;
  }
};
