import { createStore, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";
import rootReducer from "./RootReducer";
import logger from "redux-logger";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const Store = createStore(rootReducer, applyMiddleware(...middleware));

export default Store;
