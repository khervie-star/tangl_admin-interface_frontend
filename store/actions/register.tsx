import { Dispatch } from "redux";
import { SET_PHONE_TYPE, SET_REGISTER_TYPE } from "../actionTypes";

export const setPhoneNumber = (phone: string) => ({
  type: SET_PHONE_TYPE,
  phone,
});

export const setRegister = (data: { email: string; password: string }) => ({
  type: SET_REGISTER_TYPE,
  data,
});

export const setAdminRegister = (data: {
  email: string;
  password: string;
  adminType?: string;
}) => ({
  type: SET_REGISTER_TYPE,
  data,
});

export const savePhone = (phone: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setPhoneNumber(phone));
    } catch (err: any) {
      throw err;
    }
  };
};

export const registerUser = (data: {
  email: string;
  password: string;
  adminType?: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      !data.adminType
        ? dispatch(setRegister(data))
        : dispatch(setAdminRegister(data));
    } catch (err: any) {
      throw err;
    }
  };
};
