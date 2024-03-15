import { createStore, applyMiddleware, combineReducers } from "redux";
import{ thunk }from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./Reducer";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const RootReducer = combineReducers({
  data: rootReducer
});

export const store = createStore(
  RootReducer,
  applyMiddleware(...middleware)
);

export default store;
