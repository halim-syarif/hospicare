import {
  SET_ISLOGIN,
  SET_LOADING,
  SET_ERROR_MESSAGE,
} from "../keys"

const baseURL = 'http://localhost:3000'


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
    fetch(`${baseURL}/employees/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      const {access_token, name, role, message} = data
      if(access_token){
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('name', name)
        localStorage.setItem('role', role)
        dispatch(setIsLogin(true))
      } else {
        dispatch(setErrorMessage(message))
      }
    })
    .catch(err => dispatch(setErrorMessage(JSON.stringify(err))))
    .finally(() => dispatch(setLoading(false)))
  }
}
