import {
  SET_PHONE_TYPE,
  SET_REGISTER_ADMIN_TYPE,
  SET_REGISTER_TYPE,
} from "../actionTypes";
import { registerType } from "../types";

const initialState: registerType = {
  email: "",
  password: "",
  adminType: "",
  phone: "",
};

export const register = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PHONE_TYPE:
      return {
        ...state,
        phone: action.phone,
      };

    case SET_REGISTER_TYPE:
      return {
        ...state,
        email: action.data.email,
        password: action.data.password,
      };
    case SET_REGISTER_ADMIN_TYPE:
      return {
        ...state,
        email: action.data.email,
        password: action.data.password,
        adminType: action.data.adminType,
      };
    default:
      return state;
  }
};
