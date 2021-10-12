import { getDoctorsWorklogAction } from "./doctorsWorklogActions";
import { getWorklog } from "../../api";

export const getDoctorsWorklogOperation = () => async (dispatch, getState) => {
  try {
    await getWorklog().then((response) => {
      dispatch(getDoctorsWorklogAction(response));
    });
  } catch (error) {}
};
