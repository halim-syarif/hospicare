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

export function setSchedules(payload) {
  return {
    type: 'schedule/setSchedules',
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

export function getSchedules({poliid, dayid }) {
  return (dispatch) => {
    console.log('masuk');
    dispatch(setLoading(true))
    appApi.get(`/schedules/${poliid}/${dayid}`)
    .then(response => {
      console.log(response);
      dispatch(setSchedules(response.data))
    })
    .catch(err => {
      dispatch(setErrorMessage(err.response.data))
    })
    .finally(() => dispatch(setLoading(false)))
  }
}
