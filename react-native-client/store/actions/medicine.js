import { SET_MEDICINES_DATA, SET_MEDICINES_LOADING, SET_ERROR_MEDICINES } from "../keys";
import apiMedicines from "../../libs/medicine";

export function setMedicines(payload) {
  return {
    type: SET_MEDICINES_DATA,
    payload
  };
}

export function setLoading(payload) {
  return {
    type: SET_MEDICINES_LOADING,
    payload
  };
}

export function setErrorMedicines(payload) {
    return {
        type: SET_ERROR_MEDICINES,
        payload
    }
}

export function fetchMedicines() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const medicines = await apiMedicines({
        method: "GET"
      });
    //   console.log(medicines.data, "DATA IN STORE");
      dispatch(setMedicines(medicines.data));
      dispatch(setLoading(false));
    } catch (error) {
        dispatch(setErrorMedicines(error?.response?.data))
    }
  };
}
