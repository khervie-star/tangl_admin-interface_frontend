import axios from "axios";
import Router from "next/router";
import { makeStore } from "../store";

const store = makeStore();
const push = Router.push;
let refreshing_token: any = null;

const BASE_URL = "https://tangl-waitlist.herokuapp.com/api";

const waitlist_api = axios.create({
  baseURL: BASE_URL,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-APP-KEY": "mTClo61RDMSMaqoaT45DUhI",
  },
});

export { waitlist_api };
