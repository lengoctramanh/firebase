//LIB
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

//IMPORT
import { NODE_APP } from "../Constants";
import AuthReducer from "./Auth/authSlice";

const middleware = [thunk];

const checkLogDev = process.env.NODE_ENV === NODE_APP.DEV;
if (checkLogDev) {
  middleware.push(logger);
}

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: checkLogDev,
});

export default store;
