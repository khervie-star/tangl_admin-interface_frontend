import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export { store };
