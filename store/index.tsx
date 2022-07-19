import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "../app/browser-storage";

export const makeStore = () => {
  const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
    preloadedState: loadState(),
  });
  return store;
};
