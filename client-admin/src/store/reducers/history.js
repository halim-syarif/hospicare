const initialState = {
    isLoading: false,
    errorMessage: '',
    successMessage: ''
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'history/setLoading':
            return {...state, isLoading: action.payload}
        case 'history/setErrorMessage':
            return {...state, errorMessage: action.payload}
        case 'history/setSuccessMessage':
            return {...state, successMessage: action.payload}
        default: 
            return state
    }
}