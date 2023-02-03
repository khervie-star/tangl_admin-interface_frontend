import { Dispatch } from "redux";
import {
  SET_DOWNLOAD_FORM_TYPE,
  SET_PHONE_TYPE,
  SET_WAITLIST_TYPE,
} from "../actionTypes";

export const setPhoneNumber = (phone: string) => ({
  type: SET_PHONE_TYPE,
  phone,
});

export const setWaitlist = (data: {
  fullname: string;
  email: string;
  country: string;
  update_status?: any;
  account_type?: string;
}) => ({
  type: SET_WAITLIST_TYPE,
  data,
});

export const setDownloadForm = (data: any) => ({
  type: SET_DOWNLOAD_FORM_TYPE,
  data,
});
