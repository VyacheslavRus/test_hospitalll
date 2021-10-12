import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getDoctorsWorklogAction } from "./doctorsWorklogActions";

const getDoctorsWorklogReducer = createReducer([], {
  [getDoctorsWorklogAction]: (state, { payload }) => payload
});

export const doctorsWorklogReducer = combineReducers({
  doctorWorklog: getDoctorsWorklogReducer
});
