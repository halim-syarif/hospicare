import appApi from '../config/instanceAxios'

export function setIsLogin(payload) {
  return {
    type: 'users/setLogin',
    payload
  }
}

export function setErrorMessage(payload) {
  return {
    type: 'users/setErrorMessage',
    payload
  }
}

export function setLoading(payload) {
  return {
    type: 'users/setLoading',
    payload
  }
}


export function userLogin(payload){
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.post('/employees/login', payload)
    .then(response => {
      const {access_token, name, role} = response.data
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('name', name)
        localStorage.setItem('role', role)
        dispatch(setIsLogin(true))
    })
    .catch(err => dispatch(setErrorMessage(err.response.data.message)))
    .finally(() => dispatch(setLoading(false)))
  }
}

