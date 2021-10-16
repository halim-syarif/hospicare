import appApi from "../config/instanceAxios";

export function setPoli(payload) {
  return {
    type: 'schedule/setPoli',
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: 'schedule/setLoading',
    payload,
  };
}

export function setErrorMessage(payload) {
  return {
    type: 'schedule/setErrorMessage',
    payload,
  };
}

export function getPolis() {
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.get('/poli')
    .then(response => {
      dispatch(setPoli(response.data))
    })
    .catch(err => {
      dispatch(setErrorMessage(err.response.data))
    })
    .finally(() => dispatch(setLoading(false)))
  }
}
