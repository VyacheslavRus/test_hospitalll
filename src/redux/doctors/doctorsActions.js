import { createAction } from "@reduxjs/toolkit";

export const getDoctorsAction = createAction("doctors/getDoctorsAction");
export const setDoctorsLoadingAction = createAction(
  "doctors/setDoctorsLoadingAction"
);
