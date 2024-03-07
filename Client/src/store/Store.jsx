// import {createStore, combineReducers, }
// import { configureStore } from "@reduxjs/toolkit";
// import Reducer from "./Reducer";
// import {Reducer}  from "./Reducer";
// import {thunk} from 'redux-thunk';
// import logger from "redux-logger";

// const Store = configureStore({
//     reducer: {
//         users: Reducer
//     }
// })

// const rootreducer=combineReducers({user:Reducer});
// const Store=configureStore({reducer:rootreducer,middleware:[thunk,logger]})
// export default Store;

//import { configureStore} from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
import { thunk } from "redux-thunk";
import rootReducer from "./RootReducer";
import logger from "redux-logger";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const Store = createStore(rootReducer, applyMiddleware(...middleware));

export default Store;
