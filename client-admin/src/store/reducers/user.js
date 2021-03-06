const initialState = {
    isLogin: false,
    isLoading: false,
    errorMessage: '',
    patients: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'users/setLogin':
            return {...state, isLogin: action.payload}
        case 'users/setLoading':
            return {...state, isLoading: action.payload}
        case 'users/setErrorMessage':
            return {...state, errorMessage: action.payload}
        case 'patient/setPatient':
            return {...state, patients: action.payload}
        default: 
            return state
    }
}