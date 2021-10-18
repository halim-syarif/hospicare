import appApi from "../config/instanceAxios";

export function setHistory(payload) {
  return {
    type: 'history/sethistory',
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: 'history/setLoading',
    payload,
  };
}

export function setErrorMessage(payload) {
  return {
    type: 'history/setErrorMessage',
    payload,
  };
}

export function setSuccessMessage(payload) {
  return {
    type: 'history/setSuccessMessage',
    payload,
  };
}

export function updateHistory(payload){
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.post('/history', payload, {
      headers: {
        access_token: localStorage.getItem('access_token')
      },
    })
    .then(response => {
      dispatch(setSuccessMessage(response.data.message))
    })
    .catch(err => {
      dispatch(setErrorMessage(err.response.data))
    })
    .finally(() => setLoading(false))
  }
}


