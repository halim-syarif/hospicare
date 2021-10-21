import appApi from "../config/instanceAxios";

export function setMedicine(payload) {
  return {
    type: 'medicine/setMedicine',
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: 'medicine/setLoading',
    payload,
  };
}

export function setErrorMessage(payload) {
  return {
    type: 'medicine/setErrorMessage',
    payload,
  };
}

export function setSelectedMedicines(payload) {
  return {
    type: 'medicine/setSelectedMedicines',
    payload,
  };
}

export function getMedicine() {
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.get('/medicines',{
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(response => {
      dispatch(setMedicine(response.data.rows))
    })
    .catch(err => {
      dispatch(setErrorMessage(err.response.data))
    })
    .finally(() => dispatch(setLoading(false)))
  }
}
