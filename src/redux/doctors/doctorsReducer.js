import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getDoctorsAction, setDoctorsLoadingAction } from "./doctorsActions";

const getDoctorsReducer = createReducer([], {
  [getDoctorsAction]: (state, { payload }) => payload
});

const doctorLoaderReducer = createReducer(false, {
  [setDoctorsLoadingAction]: () => true,
  [getDoctorsAction]: () => false
});

export const doctorsReducer = combineReducers({
  doctor: getDoctorsReducer,
  isLoading: doctorLoaderReducer
});
