import { 
   SET_DOCTORS_NAMES,
   SET_DOCTORS_LOADING_NAMES,
   SET_ALL_DOCTORS,
   SET_ERROR_ALL_DOCTORS,
   SET_LOADING_ALL_DOCTORS
} from "../keys";

const initialState = {
    data: '',
    doctorNames: [],
    isLoading: false,
    allDoctors: [],
    allDoctorsError: '',
    allDoctorsIsLoading: false,
}

function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case SET_DOCTORS_NAMES:
            return {...state, doctorNames: payload}
        case SET_DOCTORS_LOADING_NAMES: 
            return {...state, doctorNames: payload}
        case SET_ALL_DOCTORS:
            return {...state, allDoctors: payload}
        case SET_ERROR_ALL_DOCTORS:
            return {...state, allDoctorsError: payload}
        case SET_LOADING_ALL_DOCTORS:
            return {...state, allDoctorsIsLoading: payload}
        default:
            return state
    }
}

export default reducer