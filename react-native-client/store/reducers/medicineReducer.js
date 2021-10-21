import { SET_MEDICINES_DATA, SET_MEDICINES_LOADING, SET_ERROR_MEDICINES } from "../keys";

const initialState = {
    medicines : [],
    errorMessage : "",
    loadingMedicine : false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_MEDICINES_DATA:
            return {...state, medicines: action.payload}
        case SET_MEDICINES_LOADING:
            return {...state, loadingMedicine: action.payload}
        case SET_ERROR_MEDICINES:
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}