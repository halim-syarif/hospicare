import { SET_PATIENT_DATA, SET_PATIENT_LOGIN_ERROR } from "../keys";

const initialState = {
    email: '',
    id: 0,
    access_token: '',
    errorLogin: ''
}

function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case SET_PATIENT_DATA:
            const {id, email, access_token } = payload
            return {...state, access_token, id, email, errorLogin: ''}
        case SET_PATIENT_LOGIN_ERROR:
            const { message } = payload
            return {...state, errorLogin: message, access_token: '', email: '', id: 0}
        default:
            return state
    }
}

export default reducer