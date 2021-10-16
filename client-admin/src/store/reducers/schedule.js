const initialState = {
    isLoading: false,
    errorMessage: '',
    poli: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'schedule/setIsLoading':
            return {...state, isLoading: action.payload}
        case 'schedule/setErrorMessage':
            return {...state, errorMessage: action.payload}
        case 'schedule/setPoli':
            return {...state, poli: action.payload}
        default: 
            return state
    }
}