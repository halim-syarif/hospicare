import {
  SET_HISTORY_LOADING,
  SET_HISTORY_DATA,
  SET_HISTORY_ERROR,
  SET_ANTRIAN,
  SET_ANTRIAN_LOADING,
  SET_MIDTRANS
} from "../keys";
import http from "../../libs/history";
import apiSchedules from "../../libs/schedule";

export function setHistory(payload) {
  return {
    type: SET_HISTORY_DATA,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_HISTORY_LOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SET_HISTORY_ERROR,
    payload,
  };
}

export function setAntrian(payload) {
  return {
    type: SET_ANTRIAN,
    payload,
  };
}

export function setAntrianLoading(payload) {
  return {
    type: SET_ANTRIAN_LOADING,
    payload,
  };
}

export function setMidtrans(payload){
  return {
    type: SET_MIDTRANS,
    payload
  }
}

export function fetchHistoryPatient(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    await http
      .get(`/patient/${id}`)
      .then((response) => {
        dispatch(setHistory(response.data));
      })
      .catch((err) => {
        dispatch(setError(err.response));
      })
      .finally(() => dispatch(setLoading(false)));
  };
}

export function getAntrian(bookingId) {
  return async (dispatch) => {
    dispatch(setAntrianLoading(true));
    await apiSchedules
      .get(`/${bookingId}`)
      .then((response) => {
        let lastAntrian = 0;
        if (response.data.BookingSchedules.length > 0) {
          for (let item of response.data.BookingSchedules) {
            if (!item.status) {
              lastAntrian = item.antrian;
              break;
            }
          }
        }
        dispatch(setAntrian({ bookingId, lastAntrian }));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => dispatch(setAntrianLoading(false)));
  };
}

export function transaction(id){
  return async (dispatch) => {
    await http.post(`/transaction/${id}`)
    .then(res => {
      dispatch(setMidtrans(res.data.redirect_url))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export function getStatusTransaction(id){
  return http.get(`/transaction/${id}`)
}
