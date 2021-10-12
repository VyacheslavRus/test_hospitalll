import { getDoctorsAction, setDoctorsLoadingAction } from "./doctorsActions";
import { getEmployees } from "../../api";

export const getDoctorsOperation = () => async (dispatch, getState) => {
  dispatch(setDoctorsLoadingAction());
  try {
    await getEmployees().then((response) => {
      dispatch(getDoctorsAction(response));
    });
  } catch (error) {}
};
