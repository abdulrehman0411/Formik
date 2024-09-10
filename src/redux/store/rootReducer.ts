import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authentication.slice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
