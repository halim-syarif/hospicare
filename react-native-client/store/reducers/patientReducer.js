import { 
    SET_PATIENT_DATA, 
    SET_PATIENT_ERROR_LOGIN, 
    SET_PATIENT_LOADING_LOGIN, 
    SET_PATIENT_ERROR_REGISTER, 
    SET_PATIENT_LOADING_REGISTER 
} from "../keys";

const initialState = {
    email: '',
    id: 1,
    access_token: '',
    errorLogin: '',
    loadingLogin: false,
    errorRegister: '',
    loadingRegister: false
}

function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case SET_PATIENT_DATA:
            const {id, email, access_token } = payload
            return {...state, access_token, id, email, errorLogin: ''}
        case SET_PATIENT_ERROR_LOGIN:
            return {...state, errorLogin: payload.message || payload, access_token: '', email: '', id: 0}
        case SET_PATIENT_LOADING_LOGIN:
            return {...state, loadingLogin: payload}
        case SET_PATIENT_ERROR_REGISTER:
            return {...state, errorRegister: payload.message || payload, access_token: '', email: '', id: 0}
        case SET_PATIENT_LOADING_REGISTER:
            return {...state, loadingRegister: payload}
        default:
            return state
    }
}

export default reducer