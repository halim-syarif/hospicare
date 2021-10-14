import {
  SET_ISLOGIN,
  FETCH_PRODUCTS,
  SET_PRODUCT_BY_ID,
  SET_USER_LOADING,
  SET_LOADING,
  SET_DELETE_LOADING,
  SET_ERROR_MESSAGE,
  SET_IS_ERROR,
  SET_ERROR_MESSAGE_PRODUCT
} from "../keys"

// const baseURL = 'http://localhost:3000'
const baseURL = 'https://zuri-basic.herokuapp.com'


export function setIsLogin(payload) {
  return {
    type: SET_ISLOGIN,
    payload
  }
}

export function setUserLoading(payload) {
  return {
    type: SET_USER_LOADING,
    payload
  }
}

export function setDeleteLoading(payload) {
  return {
    type: SET_DELETE_LOADING,
    payload
  }
}

export function setErrorMessage(payload) {
  return {
    type: SET_ERROR_MESSAGE,
    payload
  }
}

export function saveProducts(payload) {
  return {
    type: FETCH_PRODUCTS,
    payload
  }
}

export function saveProductById(payload) {
  return {
    type: SET_PRODUCT_BY_ID,
    payload
  }
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload
  }
}

export function setIsErrorProduct(payload) {
  return {
    type: SET_IS_ERROR,
    payload
  }
}

export function setErrorMessageProduct(payload) {
  return {
    type: SET_ERROR_MESSAGE_PRODUCT,
    payload
  }
}

export function login(payload){
  return (dispatch) => {
    dispatch(setUserLoading(true))
    fetch(`${baseURL}/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      const {access_token, message} = data
      if(access_token){
        localStorage.setItem('access_token', access_token)
        dispatch(setIsLogin(true))
      } else {
        dispatch(setErrorMessage(message))
      }
    })
    .catch(err => dispatch(setErrorMessage(JSON.stringify(err))))
    .finally(() => dispatch(setUserLoading(false)))
  }
}

export function register(payload){
  return (dispatch) => {
    dispatch(setUserLoading(true))
    return fetch(`${baseURL}/users/addadmin`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "access_token": localStorage.getItem('access_token')
      }
    })
    .finally(() => dispatch(setUserLoading(false)))
  }
}


export function fetchProducts() {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch(`${baseURL}/products?_expand=category`)
      .then(res => res.json())
      .then(data => {
        dispatch(saveProducts(data))
      })
      .catch(console.log)
      .finally(() => dispatch(setLoading(false)))
  }
}

export function deleteProduct(id) {
  return (dispatch, getState) => {
    dispatch(setDeleteLoading(true))
    return fetch(`${baseURL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "access_token": localStorage.getItem('access_token')
      }
    })
    .then(res => res.json())
    .then(data => {
      const { products } = getState().productState
      const newList = products.filter(el => el.id !== id)
      dispatch(saveProducts(newList))
    })
    .catch(console.log)
    .finally(() => dispatch(setDeleteLoading(false)))
  }
}

export function addProduct(payload){
  return(dispatch, getState) => {
    dispatch(setLoading(true))
    
    return fetch(`${baseURL}/products`, {
      method: 'POST',
      body: payload,
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })
    .then(res => res.json())
    .then(data => {
      const { products } = getState().productState
      const newList = products.push(data)
      dispatch(fetchProducts(newList))
    })
    .catch(err => {
      dispatch(setIsErrorProduct(true))
      dispatch(setErrorMessage(err))
    })
    .finally(() => dispatch(setLoading(false)))
  }
}

export function updateProduct(id, payload){
  return (dispatch) => {
    dispatch(setLoading(true))
    return fetch(`${baseURL}/products/${id}`,{
      method: 'PUT',
      body: payload,
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })
    .then(res => res.json())
    .then(() => {
      dispatch(fetchProducts())
    })
    .catch(err => {
      dispatch(setIsErrorProduct(true))
      dispatch(setErrorMessage(err))
    })
    .finally(() => dispatch(setLoading(false)))
  }
}

export function getProductById(id){
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch(`${baseURL}/products/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(saveProductById(data))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => dispatch(setLoading(false)))
  }
}

export function deleteImageById(id){
  return () => {
    return fetch(`${baseURL}/images/${id}`, {
      method: 'DELETE',
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })
  }
}


