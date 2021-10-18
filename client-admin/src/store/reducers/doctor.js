const initialState = {
    doctors : [],
    isLoading: false,
    errorMessage: "",
    polis: [],
    successMessage: "",
    doctor: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "doctor/setDoctor":
            return {...state, doctors: action.payload}  
        case "poli/setPoli":
            return {...state, polis: action.payload}
        case "doctor/addDoctor" :
            return {...state, doctors: [action.payload, ...state.doctors]}
        case "doctor/deleteDoctor":
            return {...state, successMessage: action.payload}
        case "doctor/fetchOneDoctor":
            return {...state, doctor: action.payload}
        default:
            return state;
    }
}