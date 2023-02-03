import axios from "axios";
import { api } from "./api";
import { waitlist_api } from "./waitlist";

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

source && source.cancel("Operation canceled due to new request.");

// save the new request for cancellation
source = axios.CancelToken.source();

// Organization Onboarding
export const sendVerificationCode = (data: any) => {
  return api.post("/onboard/general/send-verification-code", data);
};

export const sendEmailConfirmation = (data: any) => {
  return api.post("/onboard/general/send-email-confirmation-link", data);
};

export const verifyPhone = (data: any) => {
  return api.post("/onboard/general/verify-phone", data);
};

export const verifyEmail = (data: any) => {
  return api.post("/onboard/general/verify-email", data);
};

export const investmentCompanySignup = (data: any) => {
  return api.post("/onboard/investment-company/signup", data);
};

export const joinWaitinglist = (data: any) => {
  return waitlist_api.post("/waitlist", data);
};

export const downloadArticle = (data: any) => {
  return waitlist_api.post("/download_articles");
};
