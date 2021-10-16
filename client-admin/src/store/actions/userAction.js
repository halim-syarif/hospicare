import {
  SET_ISLOGIN,
  SET_LOADING,
  SET_ERROR_MESSAGE,
} from "../keys/adminKeys"
import appApi from '../config/instanceAxios'

export function setIsLogin(payload) {
  return {
    type: SET_ISLOGIN,
    payload
  }
}

export function setErrorMessage(payload) {
  return {
    type: SET_ERROR_MESSAGE,
    payload
  }
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
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

