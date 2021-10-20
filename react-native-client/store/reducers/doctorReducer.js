import { 
   SET_DOCTORS_NAMES,
   SET_DOCTORS_LOADING_NAMES
} from "../keys";

const initialState = {
    data: '',
    doctorNames: [],
    isLoading: false
}

function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case SET_DOCTORS_NAMES:
            return {...state, doctorNames: payload}
        case SET_DOCTORS_LOADING_NAMES: 
            return {...state, doctorNames: payload}
        default:
            return state
    }
}

export default reducer