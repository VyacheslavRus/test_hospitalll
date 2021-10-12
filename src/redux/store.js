import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { doctorsReducer } from "./doctors/doctorsReducer";
import { doctorsWorklogReducer } from "./doctorsWorklog/doctorsWorklogReducer";

const rootReducer = combineReducers({
  doctorWorklog: doctorsWorklogReducer,
  doctor: doctorsReducer
});

export const store = configureStore({
  reducer: rootReducer
});
